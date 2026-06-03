import Eyebrow from './Eyebrow';

const steps = [
  {
    number: '1',
    title: 'Discovery call',
    description: 'A free 30-minute call to understand your business and goals.',
  },
  {
    number: '2',
    title: 'The audit',
    description: 'We dig in and assess where AI delivers the most value.',
  },
  {
    number: '3',
    title: 'Your roadmap',
    description: 'Clear recommendations and a prioritised plan to act on.',
  },
  {
    number: '4',
    title: 'Delivery',
    description: 'Take it forward yourself, or bring us in to make it happen.',
  },
];

export default function HowItWorksAI() {
  return (
    <section id="how" className="bg-[#1a3a2a]/[0.04] py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>How it works</Eyebrow>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#1a3a2a]">
          Simple, structured, low-risk.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-syne font-light text-6xl text-[#c8a96e]">
                {step.number}
              </span>
              <h3 className="mt-6 font-syne font-bold text-xl text-[#1a3a2a]">{step.title}</h3>
              <p className="mt-3 text-[#1a3a2a]/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
