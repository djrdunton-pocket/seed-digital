import Link from 'next/link';
import { externalLinkProps } from './constants';
import Eyebrow from './Eyebrow';

export default function SupplementaryStrip() {
  return (
    <section className="bg-[#1a3a2a]/[0.04] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>Also from Seed Digital</Eyebrow>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#1a3a2a]">
          Your web presence is key to your strategy.
        </h2>

        <p className="mt-6 text-lg text-[#1a3a2a]/70 max-w-2xl">
          A strong, findable website is part of making AI work for your
          business, and we can help with that too. From building the site
          itself to checking how well it converts.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-[#f5f0e8] border border-[#1a3a2a]/15 p-8 flex flex-col">
            <h3 className="font-syne font-bold text-2xl text-[#1a3a2a]">
              Website design &amp; build
            </h3>
            <p className="mt-3 text-[#1a3a2a]/70 flex-1">
              Fixed-price, LLM-ready websites for startups and small businesses.
              Fast delivery, no surprises.
            </p>
            <Link
              href="/web"
              className="mt-6 inline-block text-sm tracking-wide text-[#1a3a2a] border-b border-[#c8a96e] pb-1 hover:text-[#1a3a2a]/70 transition-colors self-start"
            >
              Visit website services &rarr;
            </Link>
          </div>

          <div className="bg-[#f5f0e8] border border-[#1a3a2a]/15 p-8 flex flex-col">
            <h3 className="font-syne font-bold text-2xl text-[#1a3a2a]">
              Free conversion analysis
            </h3>
            <p className="mt-3 text-[#1a3a2a]/70 flex-1">
              A free, 30-second read on how your current website performs: speed,
              findability and usability, in plain English, with what to fix
              first.
            </p>
            <a
              href="https://cro.seed-digital.ai"
              {...externalLinkProps}
              className="mt-6 inline-block text-sm tracking-wide text-[#1a3a2a] border-b border-[#c8a96e] pb-1 hover:text-[#1a3a2a]/70 transition-colors self-start"
            >
              Analyse your website &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
