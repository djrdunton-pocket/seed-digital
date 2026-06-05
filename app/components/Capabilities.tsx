import Link from 'next/link';
import Eyebrow from './Eyebrow';

const capabilities = [
  {
    title: 'Find the opportunity',
    body: 'Our core work. A clear, prioritised view of where AI genuinely earns its place in your business, based on how you actually operate. Not a generic pitch, a specific diagnosis of where your team’s time is going and where it should not be.',
  },
  {
    title: 'Automate the busy work',
    body: 'We pinpoint the repetitive, manual tasks quietly draining your best people, then automate them, with a person in the loop wherever judgement matters.',
  },
  {
    title: 'Put your knowledge to work',
    body: 'Assistants and copilots grounded in your own documents and data, so the answers are accurate and sourced rather than generic, and your team actually trusts them.',
  },
  {
    title: 'Make decisions on better data',
    body: 'Turn slow, manual reporting and data prep into answers your team can get in plain English, so decisions rest on current information, not last month’s spreadsheet.',
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 border-t border-[#1a3a2a]/10">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>What we do</Eyebrow>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#1a3a2a]">
          AI consultancy, grounded in delivery.
        </h2>

        <p className="mt-6 text-lg text-[#1a3a2a]/70 max-w-3xl">
          Our core capability is AI consultancy: cutting through the noise to
          work out where AI genuinely fits your business, what is worth doing,
          and in what order. Most engagements start with the Audit. When you
          want the plan delivered and not just advised, we build it too,
          choosing the right tool for each job.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="border border-[#1a3a2a]/15 p-8">
              <h3 className="font-syne font-bold text-xl text-[#1a3a2a]">{c.title}</h3>
              <p className="mt-3 text-[#1a3a2a]/70">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#1a3a2a]/[0.04] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[#1a3a2a]/70 max-w-2xl">
            You do not have to take our word for it. The fixed-price AI Audit is
            a low-risk way to see exactly where the value is in your business,
            before you commit to anything.
          </p>
          <Link
            href="/ai-audit"
            className="flex-shrink-0 bg-[#1a3a2a] text-[#f5f0e8] px-8 py-4 text-sm tracking-wide hover:bg-[#1a3a2a]/90 transition-colors text-center"
          >
            Start with an audit
          </Link>
        </div>
      </div>
    </section>
  );
}
