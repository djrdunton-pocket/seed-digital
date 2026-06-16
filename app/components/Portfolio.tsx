import Image from 'next/image';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0F172A] py-24 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">Recent work</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-light text-[#E2E8F0]">Built by Seed Digital</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://www.steepteas.co.uk" target="_blank" rel="noopener noreferrer" className="group">
            <div className="overflow-hidden mb-4 border border-[#1E293B]">
              <Image src="/steep-teas.png" alt="Steep Teas website" width={600} height={400} className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#22C55E] mb-2">E-commerce · Product brand</div>
            <h3 className="font-syne text-xl text-[#E2E8F0] mb-2">Steep Teas</h3>
            <p className="text-sm text-[#94A3B8]">A clean, fast product site for a loose leaf tea brand. Mobile-first, built for conversions.</p>
          </a>
          <a href="https://www.pocketbuilder.co.uk" target="_blank" rel="noopener noreferrer" className="group">
            <div className="overflow-hidden mb-4 border border-[#1E293B]">
              <Image src="/pocket-builder.png" alt="Pocket Builder website" width={600} height={400} className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#22C55E] mb-2">SaaS · Web application</div>
            <h3 className="font-syne text-xl text-[#E2E8F0] mb-2">Pocket Builder</h3>
            <p className="text-sm text-[#94A3B8]">A full web application for UK builders. Timelines, invoicing and project management in one place.</p>
          </a>
          <a href="https://www.emissio.tech" target="_blank" rel="noopener noreferrer" className="group">
            <div className="overflow-hidden mb-4 border border-[#1E293B]">
              <Image src="/emissio.png" alt="Emissio website" width={600} height={400} className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#22C55E] mb-2">SaaS · Carbon reporting</div>
            <h3 className="font-syne text-xl text-[#E2E8F0] mb-2">Emissio</h3>
            <p className="text-sm text-[#94A3B8]">UK carbon reporting platform for SMEs. GHG Protocol aligned reports from £149, same day, no consultant needed.</p>
          </a>
        </div>
      </div>
    </section>
  );
}