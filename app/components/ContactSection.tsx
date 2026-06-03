import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f0e8] py-24 border-t border-[#1a3a2a]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">Get in touch</span>
            </div>
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-6">Let&apos;s build something</h2>
            <p className="text-[#1a3a2a]/60 leading-relaxed mb-6">Tell us about your business and what you need. We will get back to you within 24 hours.</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                <span className="text-sm text-[#1a3a2a]/60">Fixed price. No surprises.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                <span className="text-sm text-[#1a3a2a]/60">Response within 24 hours.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                <span className="text-sm text-[#1a3a2a]/60">Based in Bath. Happy to meet in person.</span>
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
