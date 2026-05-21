import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#f5f0e8] pt-20">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50 font-dm-sans">
            Bath · Bristol · Somerset
          </span>
        </div>
        <h1 className="font-fraunces text-5xl md:text-7xl font-light text-[#1a3a2a] leading-tight max-w-4xl mb-8">
          Sleek websites. Fixed price. Built to be found.
        </h1>
        <p className="text-lg md:text-xl text-[#1a3a2a]/70 max-w-2xl mb-12 leading-relaxed">
          Seed Digital builds sleek and sensibly priced websites for startups and small businesses across Bath, Bristol and Somerset, with fixed price, fast delivery and no surprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#packages" className="inline-block bg-[#1a3a2a] text-[#f5f0e8] px-8 py-4 text-sm tracking-wide hover:bg-[#1a3a2a]/90 transition-colors text-center">
            See our packages
          </Link>
          <Link href="#portfolio" className="inline-block border border-[#1a3a2a] text-[#1a3a2a] px-8 py-4 text-sm tracking-wide hover:bg-[#1a3a2a]/5 transition-colors text-center">
            View our work
          </Link>
        </div>
        <div className="mt-16 pt-8 border-t border-[#1a3a2a]/10 flex flex-wrap gap-8">
          {['LLM-ready', 'Fixed prices', 'No surprises', 'Bath · Bristol · Somerset', 'Fast turnaround'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
              <span className="text-sm text-[#1a3a2a]/50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}