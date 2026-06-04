// Vercel serverless function: POST /api/evaluate
// Keeps your Anthropic API key server-side. Two actions:
//   action: "questions" -> returns 3 clarifying questions (cheap, no web search)
//   action: "report"    -> returns the full structured evaluation (web search enabled)
//
// Required env var:  ANTHROPIC_API_KEY
// Optional env var:  ACCESS_CODE   (if set, the front-end must send a matching x-access-code header)

const API_URL = "https://api.anthropic.com/v1/messages";

function extractJSON(text) {
  let t = (text || "").replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start !== -1 && end !== -1) t = t.slice(start, end + 1);
  return JSON.parse(t);
}

function joinText(content) {
  return (content || [])
    .map((b) => (b.type === "text" ? b.text : ""))
    .filter(Boolean)
    .join("\n")
    .trim();
}

async function callAnthropic(body) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || `Anthropic API error (${res.status})`);
  }
  return data;
}

function businessBlock(form) {
  return `- Company: ${form.company || "(unnamed)"}
- Industry: ${form.industry}
- Size: ${form.size} employees
- Annual turnover: ${form.turnover || "not given"}
- AI maturity: ${form.maturity}
- Primary goal: ${form.goal || "not given"}
- Known challenges: ${form.challenges || "not given"}
- Repetitive / manual tasks: ${form.tasks || "not given"}
- Current tech stack: ${form.stack || "not given"}
- Data availability & quality: ${form.data || "not given"}
- Budget / appetite: ${form.budget || "not given"}
- Compliance constraints: ${form.compliance || "none noted"}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "Server missing ANTHROPIC_API_KEY" });
  }
  if (process.env.ACCESS_CODE && req.headers["x-access-code"] !== process.env.ACCESS_CODE) {
    return res.status(401).json({ error: "Incorrect access code" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { action, form = {}, answers = [] } = body;

    if (!form.industry || !form.size || !form.maturity) {
      return res.status(400).json({ error: "Industry, size and AI maturity are required" });
    }

    // ---- STEP 1: clarifying questions ----
    if (action === "questions") {
      const prompt = `You advise UK businesses on AI adoption for Seed Digital, a consultancy.
Given the business below, write the 3 clarifying questions that would most improve a tailored AI-adoption evaluation. Target the highest-leverage unknowns; be specific to this industry and size. Keep each question to one sentence.

Business:
${businessBlock(form)}

Respond with ONLY a JSON object, no markdown:
{"questions": ["...", "...", "..."]}`;

      const data = await callAnthropic({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 600,
        messages: [{ role: "user", content: prompt }],
      });
      const parsed = extractJSON(joinText(data.content));
      return res.status(200).json({ questions: parsed.questions || [] });
    }

    // ---- STEP 2: full evaluation ----
    if (action === "report") {
      const qa = (answers || [])
        .map((a, i) => `Q${i + 1}: ${a.q}\nA${i + 1}: ${a.a || "(no answer)"}`)
        .join("\n");

      const prompt = `You advise UK businesses on AI adoption for Seed Digital, a consultancy. Produce a rich, practical evaluation for the business below. Use web search to ground tool names and pricing in what is genuinely current and available right now, and base any benchmarks on real, recent sources. Be specific to this industry and size; avoid generic filler.

Business:
${businessBlock(form)}

Consultant's follow-up answers:
${qa || "(none)"}

Respond with ONLY a JSON object in exactly this shape, no markdown, no commentary:
{
  "readinessScore": <integer 0-100, derived from maturity, data quality, budget and stack>,
  "scoreSummary": "<one sentence explaining the score>",
  "quickWins": [{"title": "", "detail": "", "effort": "Low|Medium|High", "impact": "Low|Medium|High"}],
  "opportunities": [{"title": "", "detail": "", "effort": "Low|Medium|High", "impact": "Low|Medium|High"}],
  "tools": [{"name": "", "what": "", "pricing": "", "url": ""}],
  "roadmap": {"d30": ["", ""], "d60": ["", ""], "d90": ["", ""]},
  "risks": ["", ""],
  "firstStep": "<the single recommended first action>",
  "discoveryQuestions": ["<3-4 questions the consultant should ask the client next>"]
}

Aim for 3-4 quick wins, 2-3 opportunities, 3-4 tools with real current pricing, and concrete roadmap items. Keep each detail to 1-2 sentences.`;

      const data = await callAnthropic({
        model: "claude-sonnet-4-6",
        max_tokens: 4000,
        messages: [{ role: "user", content: prompt }],
        tools: [{ type: "web_search_20250305", name: "web_search", max_uses: 5 }],
      });
      const report = extractJSON(joinText(data.content));
      return res.status(200).json({ report });
    }

    return res.status(400).json({ error: "Unknown action" });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Something went wrong" });
  }
}
