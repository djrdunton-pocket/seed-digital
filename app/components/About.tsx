export default function About() {
  return (
    <section id="about" className="bg-[#1a3a2a] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/40">About</span>
            </div>
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-8">Local knowledge. Agency experience.</h2>
            <p className="text-[#f5f0e8]/70 leading-relaxed mb-6">I've been building websites since 2008, working with big agencies before starting Seed Digital to give Bath's startups and small businesses access to sleek, professional websites at a price that makes sense.</p>
            <p className="text-[#f5f0e8]/70 leading-relaxed">No big agency overhead, no inflated bills. Just honest work, delivered properly.</p>
          </div>
          <div className="border border-[#f5f0e8]/10 p-8">
            <div className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-6">Why Seed Digital</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                <p className="text-sm text-[#f5f0e8]/60">Fixed prices mean no surprises. You know exactly what you're paying for, before we start.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                <p className="text-sm text-[#f5f0e8]/60">Fast delivery. Most projects live within 14 days from deposit to launch.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                <p className="text-sm text-[#f5f0e8]/60">Local to Bath. I understand the market and am always happy to meet in person.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                <p className="text-sm text-[#f5f0e8]/60">17 years of experience building for brands of all sizes. You get agency quality without the agency bill.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
