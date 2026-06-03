import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import LLMSection from '../components/LLMSection';
import Packages from '../components/Packages';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import SiteFooter from '../components/SiteFooter';
import WebSchema from '../components/WebSchema';

export const metadata: Metadata = {
  title: 'Website design & build · Fixed-price, LLM-ready — Seed Digital',
  description:
    'Fixed-price, LLM-ready websites for startups and small businesses across Bath, Bristol and Somerset. Fast delivery, no surprises. Part of Seed Digital.',
  keywords: ['web design Bath', 'web design Bristol', 'web design Somerset', 'fixed price web design', 'LLM ready websites', 'small business websites', 'startup websites'],
  alternates: { canonical: 'https://seed-digital.ai/web' },
  openGraph: {
    title: 'Website design & build · Fixed-price, LLM-ready — Seed Digital',
    description:
      'Fixed-price, LLM-ready websites for startups and small businesses across Bath, Bristol and Somerset. Fast delivery, no surprises.',
    url: 'https://seed-digital.ai/web',
    siteName: 'Seed Digital',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function WebPage() {
  return (
    <>
      <WebSchema />
      <Nav />
      <main>
        <Hero />
        <LLMSection />
        <Packages />
        <HowItWorks />
        <Portfolio />
        <FAQ />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
