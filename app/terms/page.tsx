export const metadata = {
    title: 'Terms and Conditions · Seed Digital',
    description: 'Terms and conditions for Seed Digital web design services.',
  };
  
  export default function TermsPage() {
    return (
      <main className="bg-[#f5f0e8] min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">Legal</span>
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-4">Terms and Conditions</h1>
          <p className="text-sm text-[#1a3a2a]/40 mb-16">Last updated: May 2026</p>
  
          <div className="flex flex-col gap-12">
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">1. Services</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Seed Digital provides fixed-price web design and development services as defined in the chosen package at the time of booking. Seed Digital is a trading name of DJRD Ltd, registered in England and Wales, company number 16103531.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">2. Payment</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">A 50% deposit is required to secure your start date. The remaining 50% is due on launch day before the site goes live. Payments are processed securely via Stripe.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">3. Scope</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Each package has a clearly defined scope. Work outside the agreed scope will be quoted separately and agreed in writing before any additional work begins.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">4. Revisions</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Revision rounds are defined per package. Seed includes 2 rounds, Grow includes 3 rounds, Flourish includes unlimited revisions for 30 days.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">5. Timelines</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Delivery timelines begin from the date the deposit is received and all required content is provided by the client. Delays in providing content may affect delivery dates.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">6. Content</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">The client is responsible for providing all content unless the Flourish package has been purchased, which includes copywriting.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">7. Ownership</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Full ownership of the website transfers to the client upon receipt of final payment.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">8. Hosting</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Hosting is provided free in year 1. After year 1, hosting is charged at £90/yr. The client may choose to host elsewhere at any time and all files will be handed over on request.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">9. Intellectual Property</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Seed Digital retains the right to display completed work in its portfolio unless the client requests otherwise in writing.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">10. Liability</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Seed Digital's liability is limited to the value of the project fee paid. We are not liable for any loss of business, revenue or data arising from use of the website.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">11. Cancellation</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">If the client cancels after work has begun, the deposit is non-refundable. If Seed Digital cancels, a full refund of the deposit will be issued.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">12. Governing Law</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">These terms are governed by the laws of England and Wales.</p>
            </div>
  
          </div>
  
          <div className="mt-16 pt-8 border-t border-[#1a3a2a]/10">
            <a href="/" className="text-sm text-[#1a3a2a]/50 hover:text-[#1a3a2a] transition-colors">← Back to Seed Digital</a>
          </div>
        </div>
      </main>
    );
  }