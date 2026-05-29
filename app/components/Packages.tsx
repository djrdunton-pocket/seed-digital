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
    <section id="packages" className="bg-[#1a3a2a] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/40">Packages</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#f5f0e8]">Simple, fixed pricing</h2>
          <p className="mt-4 text-[#f5f0e8]/60 max-w-xl">Pick the package that fits. 50% deposit to secure your start date, 50% on launch day. Every site is LLM-ready as standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`p-8 flex flex-col ${pkg.highlighted ? 'bg-[#f5f0e8] text-[#1a3a2a]' : 'bg-[#1a3a2a] border border-[#f5f0e8]/10 text-[#f5f0e8]'}`}>
              {pkg.highlighted && (
                <div className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-4">Most popular</div>
              )}
              <div className="font-syne text-2xl font-bold mb-1">{pkg.name}</div>
              <div className="font-dm-sans text-4xl font-light mb-4">{pkg.price}</div>
              <p className={`text-sm mb-8 ${pkg.highlighted ? 'text-[#1a3a2a]/60' : 'text-[#f5f0e8]/50'}`}>{pkg.tagline}</p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-[#c8a96e] mt-0.5">·</span>
                    <span className={pkg.highlighted ? 'text-[#1a3a2a]/80' : 'text-[#f5f0e8]/70'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={`text-xs mb-6 ${pkg.highlighted ? 'text-[#1a3a2a]/40' : 'text-[#f5f0e8]/30'}`}>{pkg.note}</div>
              <a href={pkg.stripeLink} target="_blank" rel="noopener noreferrer" className={`text-center text-sm px-6 py-3 transition-colors mb-3 ${pkg.highlighted ? 'bg-[#1a3a2a] text-[#f5f0e8] hover:bg-[#1a3a2a]/90' : 'border border-[#f5f0e8]/20 text-[#f5f0e8] hover:border-[#f5f0e8]/40'}`}>
                Pay 50% deposit to start
              </a>
              <Link href="#contact" className={`text-center text-xs transition-colors ${pkg.highlighted ? 'text-[#1a3a2a]/40 hover:text-[#1a3a2a]/60' : 'text-[#f5f0e8]/30 hover:text-[#f5f0e8]/50'}`}>
                Have a question? Ask us below
              </Link>
            </div>
          ))}
        </div>

        {/* Bespoke builds */}
        <div className="mt-8 border border-[#f5f0e8]/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-2">Bespoke builds</div>
            <p className="text-[#f5f0e8]/70 text-sm">Need something more complex? We build bespoke SaaS platforms, e-commerce stores and custom web applications. Every build is LLM-ready as standard.</p>
          </div>
          <Link href="#contact" className="flex-shrink-0 border border-[#f5f0e8]/20 text-[#f5f0e8] px-8 py-3 text-sm tracking-wide hover:border-[#f5f0e8]/50 transition-colors text-center">
            Please enquire
          </Link>
        </div>

        <p className="mt-6 text-sm text-[#f5f0e8]/30 text-center">All packages include free hosting in year 1. Maintenance quoted separately per spec.</p>
      </div>
    </section>
  );
}