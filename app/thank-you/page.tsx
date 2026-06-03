import type { Metadata } from 'next';
import Nav from '../components/Nav';
import ThankYou from '../components/ThankYou';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Thank you — Seed Digital',
  description: 'Your discovery call is booked.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://seed-digital.ai/thank-you' },
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main>
        <ThankYou />
      </main>
      <SiteFooter />
    </>
  );
}
