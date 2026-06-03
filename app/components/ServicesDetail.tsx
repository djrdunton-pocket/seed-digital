import Eyebrow from './Eyebrow';

const services = [
  {
    number: '01',
    title: 'AI workflows & automation',
    body: "The fastest return usually comes from automating the repetitive work quietly draining your team's time: chasing information, copying data between systems, drafting routine documents, triaging enquiries, generating reports. We design and build automations that connect the tools you already use and let AI handle the busywork, with a person in the loop wherever judgement matters.",
    outcome: 'Hours back each week, fewer errors, faster response times, and processes that scale without adding headcount.',
  },
  {
    number: '02',
    title: 'Custom AI & integration',
    body: 'When off-the-shelf is not enough, we build. That ranges from AI assistants and chatbots grounded in your own documents and data, to internal copilots that live inside your daily tools, to autonomous agents that carry out multi-step tasks from start to finish. We integrate AI into the systems you already run, rather than bolting on yet another disconnected tool.',
    outcome: 'A support assistant that deflects routine tickets, a knowledge copilot your team trusts, or an agent that runs a whole process on its own.',
  },
  {
    number: '03',
    title: 'AI strategy & roadmap',
    body: 'For businesses that want to adopt AI deliberately across the organisation, we build a clear roadmap: where to invest, in what sequence, what it costs, what it returns, and how to handle data, security, governance and risk along the way. This is the bigger-picture companion to the audit, turning a list of opportunities into a funded, sequenced plan your leadership can stand behind.',
    outcome: 'A board-ready plan, sensible guardrails, and confidence about where to spend and where to wait.',
  },
  {
    number: '04',
    title: 'Enablement & training',
    body: 'Tools only pay off when people use them well. We upskill your team with practical, role-specific training on the tools you have chosen, prompt and workflow design, and the working habits that make AI stick. The goal is to leave you self-sufficient, not dependent on us.',
    outcome: 'A team that is confident and productive with AI, and adoption that lasts beyond the project.',
  },
  {
    number: '05',
    title: 'Transformation & delivery',
    body: 'End-to-end change, delivered and embedded, not just advised. For larger programmes we lead the whole thing: design, build, rollout, change management and measurement, drawing on a trusted network of specialists brought in as the work needs. This is senior transformation experience applied to your business, at the scale you need it.',
    outcome: 'Real, measured change that is actually adopted across the business, not a pilot that fizzles out.',
  },
];

export default function ServicesDetail() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>After the audit</Eyebrow>
        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl text-[#1a3a2a]">
          Our services
        </h2>
        <p className="mt-6 text-lg text-[#1a3a2a]/70 max-w-2xl">
          The audit tells you what is worth doing. These are how we help you do
          it. Take the plan and run with it yourself, or bring us in to deliver
          any part.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-14">
          {services.map((service) => (
            <div key={service.number}>
              <span className="font-syne font-light text-2xl text-[#c8a96e]">
                {service.number}
              </span>
              <h3 className="mt-4 font-syne font-bold text-2xl text-[#1a3a2a]">
                {service.title}
              </h3>
              <p className="mt-4 text-[#1a3a2a]/70">{service.body}</p>
              <p className="mt-4 text-sm text-[#1a3a2a]/60">
                <span className="text-[#1a3a2a] font-semibold">What you can expect: </span>
                {service.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
