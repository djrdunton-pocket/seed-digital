export default function WebSchema() {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website design and build',
    serviceType: 'Web design',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Seed Digital',
      url: 'https://seed-digital.ai',
    },
    areaServed: [
      { '@type': 'City', name: 'Bath' },
      { '@type': 'City', name: 'Bristol' },
      { '@type': 'AdministrativeArea', name: 'Somerset' },
    ],
    description:
      'Fixed-price, LLM-ready websites for startups and small businesses across Bath, Bristol and Somerset.',
    offers: [
      { '@type': 'Offer', name: 'Seed', price: '899', priceCurrency: 'GBP' },
      { '@type': 'Offer', name: 'Grow', price: '1499', priceCurrency: 'GBP' },
      { '@type': 'Offer', name: 'Flourish', price: '2499', priceCurrency: 'GBP' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does fixed price web design work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each package has a clearly defined scope. You pick the one that fits, pay 50% to secure your start date, and that is the price. No hourly rates, no surprise invoices. Need something outside the package? We will quote before we touch it.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I need to get started with a new website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not much. A rough idea of what you need, any existing branding or logos, and your content if you have it. If you do not have content yet, our Flourish package includes copywriting.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depending on the package, between 7 and 14 days from your deposit being received and content being provided.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I own my website after it is built?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, completely. Once final payment is made the site is yours.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does website hosting cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your site is hosted on our infrastructure, free for the first year. After that, hosting is £90 per year. Prefer to host elsewhere? No problem, we will hand everything over.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where do you work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are based in Bath and work with businesses across Bath, Bristol and Somerset. We are always happy to meet in person locally, and also work with businesses across the UK.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
