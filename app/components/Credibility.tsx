import Image from 'next/image';
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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[#f5f0e8]">
              <Eyebrow>About</Eyebrow>
            </div>

            <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl">
              Hi, I&apos;m Dan.
            </h2>

            <div className="mt-8 space-y-6 text-lg text-[#f5f0e8]/70">
              <p>
                I founded Seed Digital to bring senior AI transformation
                expertise to ambitious smaller businesses. I have spent 17+ years
                leading high-stakes digital transformation and AI programmes for
                major organisations across financial services, healthcare, sport,
                energy and publishing.
              </p>
              <p>
                Most of that work has meant taking on complex, difficult
                engagements and making them work: finding where technology
                genuinely earns its place, restoring delivery and rebuilding
                trust with the people involved. I bring that same senior,
                hands-on approach to every Seed engagement, backed by a trusted
                network of specialists I bring in when the work needs them.
              </p>
              <p>
                I am based in Bath and stay close to the work whatever the title.
                I would rather tell you honestly where AI helps your business than
                sell you something that does not fit.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/dan_dunton_photo.jpeg"
              alt="Daniel Dunton, founder of Seed Digital"
              width={941}
              height={1170}
              className="w-full h-auto object-cover border border-[#f5f0e8]/15"
            />
          </div>
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
