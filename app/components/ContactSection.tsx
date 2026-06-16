import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0F172A] py-24 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">Get in touch</span>
            </div>
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">Let&apos;s build something</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">Tell us about your business and what you need. We will get back to you within 24 hours.</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#22C55E]" />
                <span className="text-sm text-[#94A3B8]">Fixed price. No surprises.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#22C55E]" />
                <span className="text-sm text-[#94A3B8]">Response within 24 hours.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#22C55E]" />
                <span className="text-sm text-[#94A3B8]">Based in Bath. Happy to meet in person.</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
