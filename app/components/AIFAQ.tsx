import Eyebrow from './Eyebrow';

const faqs = [
  {
    q: 'What happens after the audit?',
    a: 'The audit ends with a prioritised roadmap and a debrief session. From there it is entirely your call. You can run with the plan yourself, or bring us in to deliver any part of it, from quick workflow automations through to full transformation. There is no obligation to continue with us.',
  },
  {
    q: 'How big is the team?',
    a: 'Seed is led by Daniel Dunton, working closely with a trusted network of specialists brought in only when an engagement needs them. You get senior, hands-on expertise and specialist depth when it is required, without the overhead and rates of a large agency.',
  },
  {
    q: 'Do we need technical staff or prior AI experience?',
    a: 'No. We meet you where you are and explain everything in plain English. The audit is built for teams with no prior AI experience, and we scope each recommendation so you know exactly what skills it needs.',
  },
  {
    q: 'Which tools and platforms do you use?',
    a: 'We are tool-agnostic. We choose the most suitable solution for your need rather than pushing one vendor, and we will happily tell you if AI is not the right answer for a particular problem.',
  },
  {
    q: 'Is our data kept safe?',
    a: 'Yes. Data, security and governance are factored into every recommendation. Where sensitive data needs to stay under your control, we can design private or in-house deployments rather than sending it to a third party.',
  },
  {
    q: 'How quickly can we see results?',
    a: 'The audit is delivered in two weeks. Many workflow automations start saving time within weeks of beginning, while larger strategy and transformation work is sequenced so you see value at each step rather than waiting until the end.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function AIFAQ() {
  return (
    <section id="faq" className="py-24 border-t border-[#1a3a2a]/10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#1a3a2a]">
          Common questions
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-t border-[#1a3a2a]/10 pt-6">
              <h3 className="font-syne text-lg text-[#1a3a2a] mb-3">{faq.q}</h3>
              <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
