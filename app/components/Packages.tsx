import Link from 'next/link';

const packages = [
  {
    name: 'Seed',
    price: '£899',
    tagline: 'The perfect starting point for a new business.',
    features: [
      '5 pages',
      'LLM-ready',
      'Mobile-ready',
      'Contact form',
      'Basic SEO setup',
      '2 rounds of revisions',
      'Free hosting year 1',
    ],
    note: '7 day delivery · £90/yr hosting after year 1',
    highlighted: false,
    stripeLink: 'https://buy.stripe.com/aFaeVdh114Rc3ZO16q2ZO00',
  },
  {
    name: 'Grow',
    price: '£1,499',
    tagline: 'For businesses ready to be found online and by AI.',
    features: [
      '8 pages + blog',
      'LLM-ready',
      'Mobile-ready',
      'SEO & LLM optimised copy review',
      'Schema markup',
      'Google Search Console setup',
      'Contact form',
      '3 rounds of revisions',
      'Free hosting year 1',
    ],
    note: '10 day delivery · £90/yr hosting after year 1',
    highlighted: true,
    stripeLink: 'https://buy.stripe.com/6oU14n5ij4RcgMA16q2ZO01',
  },
  {
    name: 'Flourish',
    price: '£2,499',
    tagline: 'Your complete online presence, done.',
    features: [
      '12 pages + blog',
      'LLM-ready',
      'Mobile-ready',
      'SEO & LLM optimised copy review',
      'Schema markup',
      'Google Search Console setup',
      'Contact form',
      'Copywriting included',
      'Custom domain setup and email configuration',
      'Google Business Profile setup',
      'Unlimited revisions for 30 days',
      '30 days post-launch support',
      'Priority turnaround',
      'Annual site performance and traffic review (if hosting)',
      'Free hosting year 1',
    ],
    note: '14 day delivery · £90/yr hosting after year 1',
    highlighted: false,
    stripeLink: 'https://buy.stripe.com/00w28r5ij3N8bsg6qK2ZO02',
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-[#111827] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">Packages</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#E2E8F0]">Simple, fixed pricing</h2>
          <p className="mt-4 text-[#94A3B8] max-w-xl">Pick the package that fits. 50% deposit to secure your start date, 50% on launch day. Every site is LLM-ready as standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`p-8 flex flex-col rounded-2xl ${pkg.highlighted ? 'bg-[#111827] text-[#E2E8F0] border border-[#22C55E]' : 'bg-[#111827] border border-[#1E293B] text-[#E2E8F0]'}`}>
              {pkg.highlighted && (
                <div className="text-xs tracking-[0.2em] uppercase text-[#22C55E] mb-4">Most popular</div>
              )}
              <div className="font-syne text-2xl font-bold mb-1">{pkg.name}</div>
              <div className="font-dm-sans text-4xl font-light mb-4">{pkg.price}</div>
              <p className={`text-sm mb-8 ${pkg.highlighted ? 'text-[#94A3B8]' : 'text-[#94A3B8]'}`}>{pkg.tagline}</p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-[#22C55E] mt-0.5">·</span>
                    <span className={pkg.highlighted ? 'text-[#94A3B8]' : 'text-[#94A3B8]'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={`text-xs mb-6 ${pkg.highlighted ? 'text-[#94A3B8]' : 'text-[#94A3B8]'}`}>{pkg.note}</div>
              <a href={pkg.stripeLink} target="_blank" rel="noopener noreferrer" className={`text-center text-sm px-6 py-3 transition-colors mb-3 rounded-xl ${pkg.highlighted ? 'bg-[#A3E635] text-[#0F172A] hover:bg-[#A3E635]/90' : 'border border-[#334155] text-[#E2E8F0] hover:bg-[#111827]'}`}>
                Pay 50% deposit to start
              </a>
              <Link href="#contact" className={`text-center text-xs transition-colors ${pkg.highlighted ? 'text-[#94A3B8] hover:text-[#E2E8F0]' : 'text-[#94A3B8] hover:text-[#E2E8F0]'}`}>
                Have a question? Ask us below
              </Link>
            </div>
          ))}
        </div>

        {/* Bespoke builds */}
        <div className="mt-8 border border-[#1E293B] p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#22C55E] mb-2">Bespoke builds</div>
            <p className="text-[#94A3B8] text-sm">Need something more complex? We build bespoke SaaS platforms, e-commerce stores and custom web applications. Every build is LLM-ready as standard.</p>
          </div>
          <Link href="#contact" className="flex-shrink-0 border border-[#334155] text-[#E2E8F0] px-8 py-3 text-sm tracking-wide hover:bg-[#111827] transition-colors text-center rounded-xl">
            Please enquire
          </Link>
        </div>

        <p className="mt-6 text-sm text-[#94A3B8] text-center">All packages include free hosting in year 1. Maintenance quoted separately per spec.</p>
      </div>
    </section>
  );
}