import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Audit from '../components/Audit';
import HowItWorksAI from '../components/HowItWorksAI';
import AIFAQ from '../components/AIFAQ';
import ContactCTA from '../components/ContactCTA';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'The AI Audit · Fixed-price AI assessment in 2 weeks — Seed Digital',
  description:
    'A focused, fixed-price audit (£1,999) that finds where AI saves time and unlocks growth in your business, with a prioritised roadmap to act on. Delivered in 2 weeks.',
  keywords: ['AI audit', 'AI assessment', 'AI readiness', 'AI roadmap', 'AI consultancy Bath Bristol Somerset'],
  alternates: { canonical: 'https://seed-digital.ai/ai-audit' },
  openGraph: {
    title: 'The AI Audit · Fixed-price AI assessment in 2 weeks — Seed Digital',
    description:
      'A focused, fixed-price audit (£1,999) that finds where AI saves time and unlocks growth in your business, with a prioritised roadmap to act on.',
    url: 'https://seed-digital.ai/ai-audit',
    siteName: 'Seed Digital',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function AIAuditPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Audit />
        <HowItWorksAI />
        <AIFAQ />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
