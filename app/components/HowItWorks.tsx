const steps = [
    {
      number: '01',
      title: 'Choose your package',
      description:
        'Pick the package that fits your business. The scope is defined upfront so there are no surprises.',
    },
    {
      number: '02',
      title: 'Secure your start date',
      description:
        '50% deposit via Stripe locks in your start date. We get to work straight away.',
    },
    {
      number: '03',
      title: 'Review and refine',
      description:
        'We build, you review. Revisions are included in every package, clearly defined from the start.',
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'Final payment on launch day. Your site goes live, hosted and ready to grow your business.',
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="bg-[#f5f0e8] py-24">
        <div className="max-w-6xl mx-auto px-6">
  
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">
                Process
              </span>
            </div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-[#1a3a2a]">
              How it works
            </h2>
          </div>
  
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
  
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+1.5rem)] right-0 h-px bg-[#1a3a2a]/10" />
                )}
  
                <div className="font-fraunces text-5xl font-light text-[#c8a96e] mb-4">
                  {step.number}
                </div>
                <h3 className="font-fraunces text-lg text-[#1a3a2a] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  