import Eyebrow from './Eyebrow';

const tools = [
  {
    category: 'Foundation models & assistants',
    detail: 'OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini), Microsoft Copilot, plus open models such as Llama and Mistral where data control or cost favours them.',
  },
  {
    category: 'Productivity suites',
    detail: 'Microsoft 365 Copilot and Google Workspace with Gemini, bringing AI into the tools your team already lives in.',
  },
  {
    category: 'Automation & orchestration',
    detail: 'n8n, Make, Zapier and Microsoft Power Automate, from quick no-code wins to complex, agent-driven workflows.',
  },
  {
    category: 'Agent platforms',
    detail: "ChatGPT Workspace Agents, Google's Gemini Enterprise Agent Platform, Salesforce Agentforce, and custom-built agents where bespoke logic is needed.",
  },
  {
    category: 'Build & cloud AI',
    detail: 'Azure AI, Amazon Bedrock and Google Vertex AI for secure, scalable custom builds, including private deployments that keep your data in your control.',
  },
  {
    category: 'Business systems',
    detail: 'Integrating AI into the CRM, helpdesk and operations tools you already run, such as HubSpot and Salesforce.',
  },
];

export default function ToolAgnostic() {
  return (
    <section className="bg-[#1a3a2a] text-[#f5f0e8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[#f5f0e8]">
          <Eyebrow>How we choose tools</Eyebrow>
        </div>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl max-w-4xl">
          Discovery first, then the best fit.
        </h2>

        <div className="mt-8 space-y-6 text-lg text-[#f5f0e8]/70 max-w-3xl">
          <p>
            We start with discovery, not a sales pitch. We are not tied to any
            single vendor, model or platform, and the &quot;one AI for
            everything&quot; era is over. Only once we understand your needs,
            your existing systems, your budget, your data and your risk appetite
            do we decide the best way to deliver, matching the right tool to each
            specific job.
          </p>
          <p>
            If that is the platform you already pay for, great. If a different
            one fits better, we will tell you. And if the honest answer is that
            AI is not the right tool for a particular problem, we will tell you
            that too. No kickbacks, no badges to chase, no solution looking for a
            problem.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t border-[#f5f0e8]/15 pt-12">
          {tools.map((tool) => (
            <div key={tool.category}>
              <h3 className="font-syne font-semibold text-lg text-[#f5f0e8]">
                {tool.category}
              </h3>
              <p className="mt-2 text-sm text-[#f5f0e8]/60">{tool.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#f5f0e8]/50 max-w-3xl">
          We choose from across all of these based on your needs, and we keep
          this list moving as the landscape changes.
        </p>
      </div>
    </section>
  );
}
