import Eyebrow from './Eyebrow';

const stats = [
  { value: '17+', label: "Years' experience" },
  { value: '£8m+', label: 'Programme budgets led' },
  { value: 'Senior', label: 'Hands-on expertise' },
];

export default function Credibility() {
  return (
    <section id="about" className="bg-[#1a3a2a] text-[#f5f0e8] py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[#f5f0e8]">
          <Eyebrow>About</Eyebrow>
        </div>

        <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl max-w-4xl">
          Senior transformation expertise, made accessible.
        </h2>

        <div className="mt-8 space-y-6 text-lg text-[#f5f0e8]/70 max-w-3xl">
          <p>
            Seed Digital is led by Daniel Dunton, who has spent 17+ years
            leading high-stakes digital transformation and AI programmes for
            major organisations across financial services, healthcare, sport,
            energy and publishing.
          </p>
          <p>
            Now that same senior expertise is available to ambitious smaller
            businesses, backed by a trusted network of specialists brought in as
            each engagement needs.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 border-t border-[#f5f0e8]/15 pt-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-syne font-light text-5xl text-[#c8a96e]">
                {stat.value}
              </p>
              <p className="mt-3 text-[#f5f0e8]/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
