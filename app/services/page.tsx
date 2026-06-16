import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Eyebrow from '../components/Eyebrow';
import Journey from '../components/Journey';
import ServicesDetail from '../components/ServicesDetail';
import ToolAgnostic from '../components/ToolAgnostic';
import HowItWorksAI from '../components/HowItWorksAI';
import ContactCTA from '../components/ContactCTA';
import SiteFooter from '../components/SiteFooter';
import { CALENDLY_URL, externalLinkProps } from '../components/constants';

export const metadata: Metadata = {
  title: 'AI Services · Workflows, automation, strategy & delivery — Seed Digital',
  description:
    'From insight to transformation. AI workflows and automation, custom AI builds, strategy and roadmap, enablement and full delivery. Tool-agnostic: the right solution for your need, not vendor loyalty.',
  keywords: ['AI workflows', 'AI automation', 'AI integration', 'AI strategy', 'AI consultancy', 'business automation Bath Bristol Somerset'],
  alternates: { canonical: 'https://seed-digital.ai/services' },
  openGraph: {
    title: 'AI Services · Workflows, automation, strategy & delivery — Seed Digital',
    description:
      'From insight to transformation. AI workflows and automation, custom AI builds, strategy and roadmap, enablement and full delivery. Tool-agnostic.',
    url: 'https://seed-digital.ai/services',
    siteName: 'Seed Digital',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="pt-24 pb-4">
          <div className="max-w-6xl mx-auto px-6">
            <Eyebrow>AI Services · Bath · Bristol · Somerset</Eyebrow>
            <h1 className="mt-8 font-syne font-light text-5xl md:text-7xl leading-tight text-[#E2E8F0] max-w-3xl">
              From insight to transformation.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#94A3B8] max-w-2xl">
              The AI Audit shows you where AI fits and what to do first. These
              are the services that turn that roadmap into real, working change.
              Take the plan and run with it yourself, or bring us in to deliver
              any part of it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY_URL}
                {...externalLinkProps}
                className="px-8 py-4 text-sm tracking-wide text-center bg-[#A3E635] text-[#0F172A] hover:bg-[#A3E635]/90 transition-colors rounded-xl"
              >
                Book a discovery call
              </a>
              <Link
                href="/ai-audit"
                className="px-8 py-4 text-sm tracking-wide text-center border border-[#334155] text-[#E2E8F0] hover:bg-[#111827] transition-colors rounded-xl"
              >
                Start with an audit
              </Link>
            </div>
          </div>
        </section>
        <Journey />
        <ServicesDetail />
        <ToolAgnostic />
        <HowItWorksAI />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
