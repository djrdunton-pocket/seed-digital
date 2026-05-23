export const metadata = {
    title: 'Privacy Policy · Seed Digital',
    description: 'Privacy policy for Seed Digital web design services.',
  };
  
  export default function PrivacyPage() {
    return (
      <main className="bg-[#f5f0e8] min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">Legal</span>
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-4">Privacy Policy</h1>
          <p className="text-sm text-[#1a3a2a]/40 mb-16">Last updated: May 2026</p>
  
          <div className="flex flex-col gap-12">
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">1. Who we are</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Seed Digital is a trading name of DJRD Ltd, registered in England and Wales, company number 16103531. We are the data controller for any personal data collected through this website. You can contact us at hello@seed-digital.ai.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">2. What data we collect</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm mb-3">We collect the following personal data when you use our website or contact us:</p>
              <ul className="flex flex-col gap-2">
                {['Name and email address when you submit an enquiry form', 'Business name when provided', 'Payment information processed securely by Stripe (we do not store card details)', 'Usage data collected via Plausible Analytics (privacy-friendly, no cookies, no personal data)', 'Usage data collected via Google Analytics (GA4)'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1a3a2a]/70">
                    <div className="w-1 h-1 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">3. How we use your data</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm mb-3">We use your data to:</p>
              <ul className="flex flex-col gap-2">
                {['Respond to your enquiry', 'Process payments for our services', 'Deliver the services you have purchased', 'Improve our website and services'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1a3a2a]/70">
                    <div className="w-1 h-1 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">4. Legal basis</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">We process your data on the basis of legitimate interest when responding to enquiries, and contract performance when delivering services you have purchased.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">5. Data sharing</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">We do not sell your data. We share data only with the following third parties where necessary to deliver our services: Stripe (payment processing), Plausible Analytics (website analytics), Google Analytics (website analytics). All third parties are GDPR compliant.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">6. Cookies</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">We use Plausible Analytics which is cookieless and does not track personal data. Google Analytics uses cookies to collect anonymous usage data. You can opt out of Google Analytics by using the Google Analytics opt-out browser add-on.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">7. Data retention</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">We retain your personal data for as long as necessary to deliver our services and comply with legal obligations. Enquiry data is retained for up to 2 years.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">8. Your rights</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm mb-3">Under UK GDPR you have the right to:</p>
              <ul className="flex flex-col gap-2">
                {['Access the personal data we hold about you', 'Request correction of inaccurate data', 'Request deletion of your data', 'Object to processing of your data', 'Request restriction of processing'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1a3a2a]/70">
                    <div className="w-1 h-1 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm mt-3">To exercise any of these rights, contact us at hello@seed-digital.ai. You also have the right to lodge a complaint with the ICO at ico.org.uk.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">9. Contact</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">For any privacy related queries contact us at hello@seed-digital.ai or write to DJRD Ltd, Bath, United Kingdom.</p>
            </div>
  
          </div>
  
          <div className="mt-16 pt-8 border-t border-[#1a3a2a]/10">
            <a href="/" className="text-sm text-[#1a3a2a]/50 hover:text-[#1a3a2a] transition-colors">← Back to Seed Digital</a>
          </div>
        </div>
      </main>
    );
  }