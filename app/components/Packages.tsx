import Link from 'next/link';

const packages = [
  {
    name: 'Seed',
    price: '£899',
    tagline: 'The perfect starting point for a new business.',
    deliveryTime: '7 days',
    revisions: '2 rounds of revisions',
    features: [
      '5 pages',
      'Mobile-ready',
      'Contact form',
      'Basic SEO setup',
      '2 rounds of revisions',
      'Free hosting year 1',
    ],
  },
  {
    name: 'Grow',
    price: '£1,499',
    tagline: 'For businesses ready to be found online.',
    deliveryTime: '10 days',
    revisions: '3 rounds of revisions',
    features: [
      '8 pages + blog',
      'Mobile-ready',
      'SEO-optimised copy review',
      'Schema markup',
      'Google Search Console setup',
      '3 rounds of revisions',
      'Free hosting year 1',
    ],
    highlighted: true,
  },
  {
    name: 'Flourish',
    price: '£2,499',
    tagline: 'The complete package for serious growth.',
    deliveryTime: '14 days',
    revisions: 'Unlimited revisions for 30 days',
    features: [
      'Up to 12 pages',
      'Copywriting included',
      'Full brand identity',
      'Priority support',
      'Unlimited revisions for 30 days',
      'Free hosting year 1',
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-[#1a3a2a] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/40">
              Packages
            </span>
          </div>
          <h2 className="font-fraunces text-4xl md:text-5xl font-light text-[#f5f0e8]">
            Simple, fixed pricing
          </h2>
          <p className="mt-4 text-[#f5f0e8]/60 max-w-xl">
            Pick the package that fits. 50% deposit to secure your start date, 50% on launch day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-8 flex flex-col ${
                pkg.highlighted
                  ? 'bg-[#f5f0e8] text-[#1a3a2a]'
                  : 'bg-[#1a3a2a] border border-[#f5f0e8]/10 text-[#f5f0e8]'
              }`}
            >
              {pkg.highlighted && (
                <div className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-4">
                  Most popular
                </div>
              )}

              <div className="font-fraunces text-2xl mb-1">{pkg.name}</div>
              <div className="font-fraunces text-4xl font-light mb-4">{pkg.price}</div>
              <p className={`text-sm mb-8 ${pkg.highlighted ? 'text-[#1a3a2a]/60' : 'text-[#f5f0e8]/50'}`}>
                {pkg.tagline}
              </p>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-[#c8a96e] mt-0.5">·</span>
                    <span className={pkg.highlighted ? 'text-[#1a3a2a]/80' : 'text-[#f5f0e8]/70'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`text-xs mb-6 ${pkg.highlighted ? 'text-[#1a3a2a]/40' : 'text-[#f5f0e8]/30'}`}>
                Delivered in {pkg.deliveryTime} · £90/yr hosting after year 1
              </div>

              <Link
                href="#contact"
                className={`text-center text-sm px-6 py-3 transition-colors ${
                  pkg.highlighted
                    ? 'bg-[#1a3a2a] text-[#f5f0e8] hover:bg-[#1a3a2a]/90'
                    : 'border border-[#f5f0e8]/20 text-[#f5f0e8] hover:border-[#f5f0e8]/40'
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-sm text-[#f5f0e8]/30 text-center">
          All packages include free hosting in year 1. Maintenance quoted separately per spec. Changes outside agreed scope quoted at £75/hr.
        </p>

      </div>
    </section>
  );
}