import Link from 'next/link';
import { CALENDLY_URL, externalLinkProps } from './constants';
import Eyebrow from './Eyebrow';

const whatYouGet = [
  'A deep look at how your business actually works today',
  'Clear, prioritised recommendations, no jargon, no fluff',
  'A practical roadmap showing what to do, and in what order',
  'Each step scoped so you know the effort and skills involved',
  'A debrief session to walk through it together',
];

export default function Audit() {
  return (
    <section id="audit" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>Start here</Eyebrow>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#E2E8F0]">
          The AI Audit
        </h2>

        <p className="mt-6 text-lg text-[#94A3B8] max-w-2xl">
          A focused look at your business to find where AI can make the biggest
          difference, and exactly how to get there. The recommended starting
          point.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-syne font-semibold text-xl text-[#E2E8F0]">What you get</h3>
            <ul className="mt-6 space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="text-[#22C55E] font-semibold">
                    &rarr;
                  </span>
                  <span className="text-[#94A3B8]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/ai-audit"
              className="mt-8 inline-block text-sm tracking-wide text-[#E2E8F0] border-b border-[#22C55E] pb-1 hover:text-[#94A3B8] transition-colors"
            >
              See full audit details &rarr;
            </Link>
          </div>

          <div className="bg-[#111827] border border-[#1E293B] p-8 md:p-10 rounded-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">
              The AI Audit
            </p>
            <p className="mt-6 font-dm-sans font-light text-5xl md:text-6xl text-[#E2E8F0]">
              £1,999
            </p>
            <p className="mt-4 text-[#94A3B8]">Delivered in 2 weeks</p>
            <a
              href={CALENDLY_URL}
              {...externalLinkProps}
              className="mt-8 block w-full px-8 py-4 text-sm tracking-wide text-center bg-[#A3E635] text-[#0F172A] hover:bg-[#A3E635]/90 transition-colors rounded-xl"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
