import Link from 'next/link';
import { CALENDLY_URL, externalLinkProps } from './constants';
import Eyebrow from './Eyebrow';

const trustItems = [
  'Senior-led',
  'Fixed-price audit',
  'No jargon',
  'Local and in person',
  '2-week delivery',
];

export default function AIHero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="max-w-3xl">
          <Eyebrow>AI consultancy · Bath · Bristol · Somerset</Eyebrow>

          <h1 className="mt-8 font-syne font-bold tracking-tight text-5xl md:text-7xl leading-[1.05] text-[#E2E8F0]">
            Find where AI is worth it.{' '}
            <span className="bg-gradient-to-r from-[#22C55E] to-[#A3E635] bg-clip-text text-transparent">
              And where it isn&apos;t.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#94A3B8] max-w-2xl">
            Most AI advice is hype. I help small businesses across Bath, Bristol
            and Somerset find the few places AI genuinely saves time and money,
            then build them. No jargon and no overselling. I will tell you when
            AI is not the answer.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY_URL}
              {...externalLinkProps}
              className="px-8 py-4 text-sm tracking-wide text-center font-semibold rounded-xl bg-[#A3E635] text-[#0F172A] hover:bg-[#A3E635]/90 transition-colors"
            >
              Book a discovery call
            </a>
            <Link
              href="/ai-audit"
              className="px-8 py-4 text-sm tracking-wide text-center rounded-xl border border-[#334155] text-[#E2E8F0] hover:bg-[#111827] transition-colors"
            >
              Start with an audit
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E293B]">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#94A3B8]">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
