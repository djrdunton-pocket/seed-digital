'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// If/when you have the Google Ads conversion action label, set it here as
// 'AW-18184812773/xxxxxxxxxxxxxxx' and the Ads conversion will also fire.
// Leave empty to fire only the GA4 event.
const ADS_CONVERSION_SEND_TO = '';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  useEffect(() => {
    let fired = false;
    let tries = 0;

    function fire() {
      if (fired || typeof window === 'undefined' || typeof window.gtag !== 'function') {
        return false;
      }
      fired = true;
      // GA4 conversion event. Mark "discovery_call_booked" as a key event in GA4,
      // then import it into Google Ads as a conversion.
      window.gtag('event', 'discovery_call_booked', {
        event_category: 'lead',
        event_label: 'Calendly discovery call booked',
      });
      if (ADS_CONVERSION_SEND_TO) {
        window.gtag('event', 'conversion', { send_to: ADS_CONVERSION_SEND_TO });
      }
      return true;
    }

    // gtag (loaded via @next/third-parties GoogleAnalytics) may not be ready on
    // mount, so poll briefly until it is, then fire once.
    if (!fire()) {
      const id = setInterval(() => {
        if (fire() || ++tries > 40) clearInterval(id);
      }, 250);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">Booking confirmed</span>
        </div>
        <h1 className="font-syne font-light text-4xl md:text-6xl text-[#E2E8F0] leading-tight">
          Thank you. Your call is booked.
        </h1>
        <p className="mt-8 text-lg text-[#94A3B8]">
          You will get a calendar invite by email with the joining details. In
          the meantime, have a think about where AI could make the biggest
          difference in your business, and we will dig into it together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ai-audit"
            className="px-8 py-4 text-sm tracking-wide text-center bg-[#A3E635] text-[#0F172A] hover:bg-[#A3E635]/90 transition-colors rounded-xl"
          >
            Read about the AI Audit
          </Link>
          <Link
            href="/"
            className="px-8 py-4 text-sm tracking-wide text-center border border-[#334155] text-[#E2E8F0] hover:bg-[#111827] transition-colors rounded-xl"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
