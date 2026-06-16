import Image from 'next/image';
import Eyebrow from './Eyebrow';

const stats = [
  { value: '17+', label: "Years' experience" },
  { value: '£8m+', label: 'Programme budgets led' },
  { value: 'Senior', label: 'Hands-on expertise' },
];

export default function Credibility() {
  return (
    <section id="about" className="bg-[#111827] text-[#E2E8F0] py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[#E2E8F0]">
              <Eyebrow>About</Eyebrow>
            </div>

            <h2 className="mt-8 font-syne font-bold text-4xl md:text-5xl">
              Nice to meet you
            </h2>

            <div className="mt-8 space-y-6 text-lg text-[#94A3B8]">
              <p>
                I am Daniel. I founded Seed Digital to bring senior AI
                transformation expertise to ambitious smaller businesses. I have
                spent 17+ years leading high-stakes digital transformation and
                more recently AI programmes for major organisations across
                financial services, healthcare, sport, energy and publishing.
              </p>
              <p>
                I bring that senior, hands-on approach to every Seed engagement,
                backed by a trusted network of specialists I bring in when the
                work needs them.
              </p>
              <p>
                I am based in Bath and would love to meet for a coffee and a chat
                in Bath, Bristol or the surrounding parts of Somerset.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/dan_dunton_photo2.jpeg"
              alt="Daniel Dunton, founder of Seed Digital"
              width={1339}
              height={1514}
              className="w-full h-auto object-cover border border-[#1E293B]"
            />
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 border-t border-[#1E293B] pt-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-syne font-light text-5xl text-[#22C55E]">
                {stat.value}
              </p>
              <p className="mt-3 text-[#94A3B8]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
