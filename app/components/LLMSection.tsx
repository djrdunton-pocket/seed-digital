export default function LLMSection() {
    return (
      <section className="bg-[#111827] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">The future of search</span>
              </div>
              <h2 className="font-syne text-4xl md:text-5xl font-light text-[#E2E8F0] mb-8">The web has changed. Is your business keeping up?</h2>
              <a href="#packages" className="inline-block border border-[#334155] text-[#E2E8F0] px-8 py-4 text-sm tracking-wide hover:bg-[#111827] transition-colors rounded-xl">See our packages</a>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#94A3B8] leading-relaxed">People no longer just search on Google. They ask AI. ChatGPT, Claude, Gemini and Perplexity are now how millions of people find businesses, services and recommendations. Most websites are not built to be found by them.</p>
              <p className="text-[#94A3B8] leading-relaxed">At Seed Digital, every website we build is LLM-ready. Structured content, schema markup, authoritative copy and the technical foundations that get your business cited by AI. Not just indexed by Google.</p>
              <p className="text-[#94A3B8] leading-relaxed">It's why we chose a .ai domain. Not a gimmick. A signal that we understand where the web is going.</p>
              <p className="text-[#94A3B8] text-sm">Based in Bath, we work with startups and small businesses across Bath, Bristol and Somerset and beyond.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }