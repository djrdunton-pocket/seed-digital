import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: 'Seed Digital · Fixed-price websites for Bath businesses',
  description: 'Seed Digital builds sleek and sensibly priced websites for startups and small businesses, with fixed price, fast delivery and no surprises.',
  metadataBase: new URL('https://seed-digital.ai'),
  openGraph: {
    title: 'Seed Digital · Fixed-price websites for Bath businesses',
    description: 'Fixed price, fast delivery, no surprises.',
    url: 'https://seed-digital.ai',
    siteName: 'Seed Digital',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}