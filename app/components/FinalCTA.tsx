import { CALENDLY_URL, externalLinkProps } from './constants';

export default function FinalCTA() {
  return (
    <section id="book" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-syne font-bold text-4xl md:text-5xl text-[#E2E8F0]">
          Let&apos;s find your AI opportunity.
        </h2>

        <p className="mt-6 text-lg text-[#94A3B8] max-w-2xl mx-auto">
          Book a free 30-minute discovery call. No pressure, no jargon, just a
          clear conversation about what AI could do for your business.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={CALENDLY_URL}
            {...externalLinkProps}
            className="px-8 py-4 text-sm tracking-wide bg-[#A3E635] text-[#0F172A] hover:bg-[#A3E635]/90 transition-colors rounded-xl"
          >
            Book a discovery call
          </a>
        </div>
      </div>
    </section>
  );
}
