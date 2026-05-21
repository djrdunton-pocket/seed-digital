'use client';

const faqs = [
    {
      q: "How does fixed price work?",
      a: "Each package has a clearly defined scope. You pick the one that fits, pay 50% to secure your start date, and that's the price. No hourly rates, no surprise invoices. Need something outside the package? We'll quote before we touch it."
    },
    {
      q: "What do I need to get started?",
      a: "Not much. A rough idea of what you need, any existing branding or logos, and your content if you have it. If you don't have content yet, our Flourish package includes copywriting."
    },
    {
      q: "How long does it take?",
      a: "Depending on the package, between 7 and 14 days from your deposit being received and content being provided."
    },
    {
      q: "Do I own the website?",
      a: "Yes, completely. Once final payment is made the site is yours."
    },
    {
      q: "What happens after launch?",
      a: "Your site is hosted on our infrastructure, free for the first year. After that, hosting is £90/yr. Prefer to host elsewhere? No problem, we'll hand everything over and you're free to host wherever suits you."
    },
    {
      q: "Do you only work with Bath businesses?",
      a: "Bath is our home but we work with businesses across the UK. If you're local we're always happy to meet for a coffee."
    }
  ];
  
  export default function FAQ() {
    return (
      <section id="faq" className="bg-[#f5f0e8] py-24 border-t border-[#1a3a2a]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">FAQ</span>
            </div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-[#1a3a2a]">Common questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-t border-[#1a3a2a]/10 pt-6">
                <h3 className="font-fraunces text-lg text-[#1a3a2a] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }