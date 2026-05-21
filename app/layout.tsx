import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  title: 'Seed Digital · Fixed-price websites for Bath businesses',
  description: 'Seed Digital builds sleek and sensibly priced websites for startups and small businesses in Bath, with fixed price, fast delivery and no surprises.',
  metadataBase: new URL('https://seed-digital.ai'),
  keywords: ['web design Bath', 'website design Bath', 'fixed price web design', 'Bath web designer', 'small business websites Bath', 'startup websites Bath UK'],
  authors: [{ name: 'Daniel', url: 'https://seed-digital.ai' }],
  creator: 'Seed Digital',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://seed-digital.ai' },
  openGraph: {
    title: 'Seed Digital · Fixed-price websites for Bath businesses',
    description: 'Seed Digital builds sleek and sensibly priced websites for startups and small businesses in Bath, with fixed price, fast delivery and no surprises.',
    url: 'https://seed-digital.ai',
    siteName: 'Seed Digital',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seed Digital · Fixed-price websites for Bath businesses',
    description: 'Fixed-price websites for Bath startups and small businesses. Fast delivery, no surprises.',
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