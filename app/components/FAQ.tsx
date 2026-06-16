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
    q: "Where do you work?",
    a: "We're based in Bath and work with businesses across Bath, Bristol and Somerset. We're always happy to meet in person locally, and also work with businesses across the UK."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#0F172A] py-24 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">FAQ</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-light text-[#E2E8F0]">Common questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-t border-[#1E293B] pt-6">
              <h3 className="font-syne text-lg text-[#E2E8F0] mb-3">{faq.q}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}