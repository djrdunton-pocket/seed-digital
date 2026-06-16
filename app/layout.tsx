import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'Seed Digital · AI transformation consultancy for Bath, Bristol & Somerset',
  description: 'Seed Digital helps ambitious businesses adopt AI with confidence, starting with a fixed-price AI audit and a clear roadmap to act on. Tool-agnostic. Web design and conversion optimisation to deliver it.',
  metadataBase: new URL('https://seed-digital.ai'),
  keywords: ['AI consultancy Bath', 'AI consultant Bristol', 'AI transformation Somerset', 'AI audit', 'business automation', 'AI strategy', 'AI workflows'],
  authors: [{ name: 'Daniel Dunton', url: 'https://seed-digital.ai' }],
  creator: 'Seed Digital',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://seed-digital.ai' },
  openGraph: {
    title: 'Seed Digital · AI transformation consultancy for Bath, Bristol & Somerset',
    description: 'Seed Digital helps ambitious businesses adopt AI with confidence, starting with a fixed-price AI audit and a clear roadmap to act on. Tool-agnostic.',
    url: 'https://seed-digital.ai',
    siteName: 'Seed Digital',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seed Digital · AI transformation consultancy for Bath, Bristol & Somerset',
    description: 'AI transformation consultancy for ambitious businesses across Bath, Bristol and Somerset. Start with a fixed-price AI audit.',
    creator: '@seeddigital',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <Script defer src="https://plausible.io/js/pa-PbeuAfEJtpuArGNHr53ch.js" strategy="afterInteractive" />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-R85KHWL8SG" />
    </html>
  );
}