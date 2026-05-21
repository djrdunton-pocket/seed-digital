import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  title: 'Seed Digital · Fixed-price websites for Bath, Bristol and Somerset',
  description: 'Seed Digital builds sleek and sensibly priced websites for startups and small businesses across Bath, Bristol and Somerset, with fixed price, fast delivery and no surprises.',
  metadataBase: new URL('https://seed-digital.ai'),
  keywords: ['web design Bath', 'web design Bristol', 'web design Somerset', 'fixed price web design', 'LLM ready websites', 'small business websites', 'startup websites'],
  authors: [{ name: 'Daniel', url: 'https://seed-digital.ai' }],
  creator: 'Seed Digital',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://seed-digital.ai' },
  openGraph: {
    title: 'Seed Digital · Fixed-price websites for Bath, Bristol and Somerset',
    description: 'Seed Digital builds sleek and sensibly priced websites for startups and small businesses across Bath, Bristol and Somerset, with fixed price, fast delivery and no surprises.',
    url: 'https://seed-digital.ai',
    siteName: 'Seed Digital',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seed Digital · Fixed-price websites for Bath, Bristol and Somerset',
    description: 'Fixed-price websites for startups and small businesses across Bath, Bristol and Somerset. Fast delivery, no surprises.',
    creator: '@seeddigital',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}