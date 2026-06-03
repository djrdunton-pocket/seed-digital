import Link from 'next/link';
import { CALENDLY_URL, externalLinkProps } from './constants';
import Eyebrow from './Eyebrow';

const trustItems = [
  'Senior-led',
  'Fixed-price audit',
  'No jargon',
  'Tool-agnostic',
  '2-week delivery',
];

export default function AIHero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="max-w-3xl">
          <Eyebrow>AI Transformation · Bath · Bristol · Somerset</Eyebrow>

          <h1 className="mt-8 font-syne font-light text-5xl md:text-7xl leading-tight text-[#1a3a2a]">
            AI transformation for ambitious businesses.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#1a3a2a]/70 max-w-2xl">
            Everyone says you should be using AI. Few can tell you how. We find
            where AI saves you time, cuts cost and unlocks growth, then give you
            a clear plan to act on, and the hands to deliver it.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY_URL}
              {...externalLinkProps}
              className="px-8 py-4 text-sm tracking-wide text-center bg-[#1a3a2a] text-[#f5f0e8] hover:bg-[#1a3a2a]/90 transition-colors"
            >
              Book a discovery call
            </a>
            <Link
              href="/ai-audit"
              className="px-8 py-4 text-sm tracking-wide text-center border border-[#1a3a2a] text-[#1a3a2a] hover:bg-[#1a3a2a]/5 transition-colors"
            >
              Start with an audit
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a3a2a]/15">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#1a3a2a]/70">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
