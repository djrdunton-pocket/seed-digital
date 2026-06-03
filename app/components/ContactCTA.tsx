import { CALENDLY_URL, externalLinkProps } from './constants';
import Eyebrow from './Eyebrow';
import ContactForm from './ContactForm';

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#f5f0e8] py-24 border-t border-[#1a3a2a]/10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-6 font-syne text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-6">
              Let&apos;s find your AI opportunity.
            </h2>
            <p className="text-[#1a3a2a]/60 leading-relaxed mb-8">
              Book a free 30-minute discovery call, or send us a message and we
              will get back to you within 24 hours. No pressure, no jargon, just
              a clear conversation about what AI could do for your business.
            </p>

            <a
              href={CALENDLY_URL}
              {...externalLinkProps}
              className="inline-block bg-[#1a3a2a] text-[#f5f0e8] px-8 py-4 text-sm tracking-wide hover:bg-[#1a3a2a]/90 transition-colors mb-8"
            >
              Book a discovery call
            </a>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                <span className="text-sm text-[#1a3a2a]/60">Senior-led. No jargon.</span>
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
