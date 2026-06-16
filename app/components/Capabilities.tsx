import Link from 'next/link';
import Eyebrow from './Eyebrow';

const capabilities = [
  {
    title: 'Find the opportunity',
    body: 'My core work. A clear, prioritised view of where AI genuinely earns its place in your business, based on how you actually operate. Not a generic pitch, a specific diagnosis of where your team’s time is going and where it should not be.',
  },
  {
    title: 'Automate the busy work',
    body: 'I pinpoint the repetitive, manual tasks quietly draining your best people, then automate them, with a person in the loop wherever judgement matters.',
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
    <section className="py-24 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>What I do</Eyebrow>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#E2E8F0]">
          AI consultancy, grounded in delivery.
        </h2>

        <p className="mt-6 text-lg text-[#94A3B8] max-w-3xl">
          My core capability is AI consultancy: cutting through the noise to
          work out where AI genuinely fits your business, what is worth doing,
          and in what order. Most engagements start with the Audit. When you
          want the plan delivered and not just advised, I build it too,
          choosing the right tool for each job.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="border border-[#1E293B] p-8 rounded-2xl">
              <h3 className="font-syne font-bold text-xl text-[#E2E8F0]">{c.title}</h3>
              <p className="mt-3 text-[#94A3B8]">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#111827] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[#94A3B8] max-w-2xl">
            You do not have to take my word for it. The fixed-price AI Audit is
            a low-risk way to see exactly where the value is in your business,
            before you commit to anything.
          </p>
          <Link
            href="/ai-audit"
            className="flex-shrink-0 bg-[#A3E635] text-[#0F172A] px-8 py-4 text-sm tracking-wide hover:bg-[#A3E635]/90 transition-colors text-center rounded-xl"
          >
            Start with an audit
          </Link>
        </div>
      </div>
    </section>
  );
}
