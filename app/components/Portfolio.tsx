import Image from 'next/image';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f5f0e8] py-24 border-t border-[#1a3a2a]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">Recent work</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-light text-[#1a3a2a]">Built by Seed Digital</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://www.steepteas.co.uk" target="_blank" rel="noopener noreferrer" className="group">
            <div className="overflow-hidden mb-4 border border-[#1a3a2a]/10">
              <Image src="/steep-teas.png" alt="Steep Teas website" width={600} height={400} className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#c8a96e] mb-2">E-commerce · Product brand</div>
            <h3 className="font-syne text-xl text-[#1a3a2a] mb-2">Steep Teas</h3>
            <p className="text-sm text-[#1a3a2a]/60">A clean, fast product site for a loose leaf tea brand. Mobile-first, built for conversions.</p>
          </a>
          <a href="https://www.pocketbuilder.co.uk" target="_blank" rel="noopener noreferrer" className="group">
            <div className="overflow-hidden mb-4 border border-[#1a3a2a]/10">
              <Image src="/pocket-builder.png" alt="Pocket Builder website" width={600} height={400} className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#c8a96e] mb-2">SaaS · Web application</div>
            <h3 className="font-syne text-xl text-[#1a3a2a] mb-2">Pocket Builder</h3>
            <p className="text-sm text-[#1a3a2a]/60">A full web application for UK builders. Timelines, invoicing and project management in one place.</p>
          </a>
          <a href="https://www.emissio.tech" target="_blank" rel="noopener noreferrer" className="group">
            <div className="overflow-hidden mb-4 border border-[#1a3a2a]/10">
              <Image src="/emissio.png" alt="Emissio website" width={600} height={400} className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#c8a96e] mb-2">SaaS · Carbon reporting</div>
            <h3 className="font-syne text-xl text-[#1a3a2a] mb-2">Emissio</h3>
            <p className="text-sm text-[#1a3a2a]/60">UK carbon reporting platform for SMEs. GHG Protocol aligned reports from £149, same day, no consultant needed.</p>
          </a>
        </div>
      </div>
    </section>
  );
}