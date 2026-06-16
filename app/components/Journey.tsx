import Link from 'next/link';
import Eyebrow from './Eyebrow';

const services = [
  {
    number: '01',
    title: 'Audit',
    description: 'Understand where AI fits and where the quick wins are.',
  },
  {
    number: '02',
    title: 'Workflows',
    description: "Automate the repetitive work quietly draining your team's time.",
  },
  {
    number: '03',
    title: 'Strategy',
    description: 'A clear roadmap for adopting AI across the business with confidence.',
  },
  {
    number: '04',
    title: 'Transformation',
    description: 'End-to-end change, delivered and embedded, not just advised.',
  },
];

export default function Journey() {
  return (
    <section id="services" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>The journey</Eyebrow>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#1a3a2a]">
          From insight to transformation.
        </h2>

        <p className="mt-6 text-lg text-[#1a3a2a]/70 max-w-2xl">
          The audit is the start. We can guide or deliver every step from there.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.number} className="border border-[#1a3a2a]/15 p-8 flex flex-col">
              <span className="font-syne font-light text-2xl text-[#c8a96e]">
                {service.number}
              </span>
              <h3 className="mt-6 font-syne font-bold text-xl text-[#1a3a2a]">
                {service.title}
              </h3>
              <p className="mt-3 text-[#1a3a2a]/70">{service.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-10 inline-block text-sm tracking-wide text-[#1a3a2a] border-b border-[#c8a96e] pb-1 hover:text-[#1a3a2a]/70 transition-colors"
        >
          Explore our services &rarr;
        </Link>
      </div>
    </section>
  );
}
