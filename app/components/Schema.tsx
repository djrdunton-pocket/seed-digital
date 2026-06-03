export default function Schema() {
  const organisation = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Seed Digital',
    description:
      'AI transformation consultancy helping ambitious businesses across Bath, Bristol and Somerset adopt AI with confidence. Tool-agnostic. Also offering LLM-ready website design and conversion optimisation.',
    url: 'https://seed-digital.ai',
    email: 'hello@seed-digital.ai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bath',
      addressRegion: 'Somerset',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.3751,
      longitude: -2.3617,
    },
    areaServed: [
      { '@type': 'City', name: 'Bath' },
      { '@type': 'City', name: 'Bristol' },
      { '@type': 'AdministrativeArea', name: 'Somerset' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    priceRange: '££',
    currenciesAccepted: 'GBP',
    founder: { '@type': 'Person', name: 'Daniel Dunton' },
    knowsAbout: [
      'AI transformation',
      'AI consultancy',
      'AI audit',
      'Business automation',
      'AI strategy',
      'AI workflows',
      'Web Design',
      'LLM-ready websites',
    ],
    makesOffer: {
      '@type': 'Offer',
      name: 'The AI Audit',
      description:
        'A fixed-price AI audit that finds where AI can make the biggest difference to your business, with a clear, prioritised roadmap. Delivered in 2 weeks.',
      price: '1999',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
    />
  );
}
