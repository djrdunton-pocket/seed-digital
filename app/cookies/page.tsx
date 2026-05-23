export const metadata = {
    title: 'Cookie Policy · Seed Digital',
    description: 'Cookie policy for Seed Digital web design services.',
  };
  
  export default function CookiesPage() {
    return (
      <main className="bg-[#f5f0e8] min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">Legal</span>
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-4">Cookie Policy</h1>
          <p className="text-sm text-[#1a3a2a]/40 mb-16">Last updated: May 2026</p>
  
          <div className="flex flex-col gap-12">
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">What are cookies?</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use them.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">How we use cookies</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">We keep cookie use to a minimum. Here is exactly what we use:</p>
            </div>
  
            <div className="border border-[#1a3a2a]/10">
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#1a3a2a]/10 bg-[#1a3a2a]/5">
                <span className="text-xs font-bold text-[#1a3a2a] uppercase tracking-wider">Service</span>
                <span className="text-xs font-bold text-[#1a3a2a] uppercase tracking-wider">Purpose</span>
                <span className="text-xs font-bold text-[#1a3a2a] uppercase tracking-wider">Type</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#1a3a2a]/10">
                <span className="text-sm text-[#1a3a2a]/70">Plausible Analytics</span>
                <span className="text-sm text-[#1a3a2a]/70">Website analytics. Cookieless and privacy-friendly. No personal data collected.</span>
                <span className="text-sm text-[#1a3a2a]/70">No cookies</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#1a3a2a]/10">
                <span className="text-sm text-[#1a3a2a]/70">Google Analytics</span>
                <span className="text-sm text-[#1a3a2a]/70">Website analytics to understand how visitors use our site.</span>
                <span className="text-sm text-[#1a3a2a]/70">Analytics cookie</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <span className="text-sm text-[#1a3a2a]/70">Stripe</span>
                <span className="text-sm text-[#1a3a2a]/70">Fraud prevention and secure payment processing. Only set when you visit a payment page.</span>
                <span className="text-sm text-[#1a3a2a]/70">Functional cookie</span>
              </div>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">Managing cookies</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">You can control cookies through your browser settings. Disabling cookies may affect the functionality of some parts of the site. To opt out of Google Analytics tracking visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#1a3a2a] underline">tools.google.com/dlpage/gaoptout</a>.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#1a3a2a] mb-3">Contact</h2>
              <p className="text-[#1a3a2a]/70 leading-relaxed text-sm">If you have any questions about our use of cookies email us at hello@seed-digital.ai.</p>
            </div>
  
          </div>
  
          <div className="mt-16 pt-8 border-t border-[#1a3a2a]/10">
            <a href="/" className="text-sm text-[#1a3a2a]/50 hover:text-[#1a3a2a] transition-colors">← Back to Seed Digital</a>
          </div>
        </div>
      </main>
    );
  }