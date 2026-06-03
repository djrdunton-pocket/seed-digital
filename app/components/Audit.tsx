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

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#1a3a2a]">
          The AI Audit
        </h2>

        <p className="mt-6 text-lg text-[#1a3a2a]/70 max-w-2xl">
          A focused look at your business to find where AI can make the biggest
          difference, and exactly how to get there. The recommended starting
          point.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-syne font-semibold text-xl text-[#1a3a2a]">What you get</h3>
            <ul className="mt-6 space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="text-[#c8a96e] font-semibold">
                    &rarr;
                  </span>
                  <span className="text-[#1a3a2a]/80">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/ai-audit"
              className="mt-8 inline-block text-sm tracking-wide text-[#1a3a2a] border-b border-[#c8a96e] pb-1 hover:text-[#1a3a2a]/70 transition-colors"
            >
              See full audit details &rarr;
            </Link>
          </div>

          <div className="bg-[#f5f0e8] border border-[#1a3a2a]/15 p-8 md:p-10">
            <p className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/70">
              The AI Audit
            </p>
            <p className="mt-6 font-dm-sans font-light text-5xl md:text-6xl text-[#1a3a2a]">
              £1,999
            </p>
            <p className="mt-4 text-[#1a3a2a]/70">Delivered in 2 weeks</p>
            <a
              href={CALENDLY_URL}
              {...externalLinkProps}
              className="mt-8 block w-full px-8 py-4 text-sm tracking-wide text-center bg-[#1a3a2a] text-[#f5f0e8] hover:bg-[#1a3a2a]/90 transition-colors"
            >
              Book your audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
