import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#0F172A] pt-20">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8] font-dm-sans">
            Bath · Bristol · Somerset
          </span>
        </div>
        <h1 className="font-syne text-5xl md:text-7xl font-light text-[#E2E8F0] leading-tight max-w-4xl mb-8">
          Websites that grow your business.
        </h1>
        <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mb-12 leading-relaxed">
          Seed Digital builds sleek and sensibly priced websites for startups and small businesses across Bath, Bristol and Somerset, with fixed price, fast delivery and no surprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#packages" className="inline-block bg-[#A3E635] text-[#0F172A] px-8 py-4 text-sm tracking-wide hover:bg-[#A3E635]/90 transition-colors text-center rounded-xl">
            See our packages
          </Link>
          <Link href="#portfolio" className="inline-block border border-[#334155] text-[#E2E8F0] px-8 py-4 text-sm tracking-wide hover:bg-[#111827] transition-colors text-center rounded-xl">
            View our work
          </Link>
        </div>
        <div className="mt-16 pt-8 border-t border-[#1E293B] flex flex-wrap gap-8">
          {['LLM-ready', 'Fixed prices', 'No surprises', 'Bath · Bristol · Somerset', 'Fast turnaround'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#22C55E]" />
              <span className="text-sm text-[#94A3B8]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}