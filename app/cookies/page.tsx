export const metadata = {
    title: 'Cookie Policy · Seed Digital',
    description: 'Cookie policy for Seed Digital web design services.',
  };
  
  export default function CookiesPage() {
    return (
      <main className="bg-[#0F172A] min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">Legal</span>
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4">Cookie Policy</h1>
          <p className="text-sm text-[#94A3B8] mb-16">Last updated: May 2026</p>
  
          <div className="flex flex-col gap-12">
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#E2E8F0] mb-3">What are cookies?</h2>
              <p className="text-[#94A3B8] leading-relaxed text-sm">Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use them.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#E2E8F0] mb-3">How we use cookies</h2>
              <p className="text-[#94A3B8] leading-relaxed text-sm">We keep cookie use to a minimum. Here is exactly what we use:</p>
            </div>
  
            <div className="border border-[#1E293B]">
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#1E293B] bg-[#111827]">
                <span className="text-xs font-bold text-[#E2E8F0] uppercase tracking-wider">Service</span>
                <span className="text-xs font-bold text-[#E2E8F0] uppercase tracking-wider">Purpose</span>
                <span className="text-xs font-bold text-[#E2E8F0] uppercase tracking-wider">Type</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#1E293B]">
                <span className="text-sm text-[#94A3B8]">Plausible Analytics</span>
                <span className="text-sm text-[#94A3B8]">Website analytics. Cookieless and privacy-friendly. No personal data collected.</span>
                <span className="text-sm text-[#94A3B8]">No cookies</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#1E293B]">
                <span className="text-sm text-[#94A3B8]">Google Analytics</span>
                <span className="text-sm text-[#94A3B8]">Website analytics to understand how visitors use our site.</span>
                <span className="text-sm text-[#94A3B8]">Analytics cookie</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <span className="text-sm text-[#94A3B8]">Stripe</span>
                <span className="text-sm text-[#94A3B8]">Fraud prevention and secure payment processing. Only set when you visit a payment page.</span>
                <span className="text-sm text-[#94A3B8]">Functional cookie</span>
              </div>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#E2E8F0] mb-3">Managing cookies</h2>
              <p className="text-[#94A3B8] leading-relaxed text-sm">You can control cookies through your browser settings. Disabling cookies may affect the functionality of some parts of the site. To opt out of Google Analytics tracking visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#E2E8F0] underline">tools.google.com/dlpage/gaoptout</a>.</p>
            </div>
  
            <div>
              <h2 className="font-syne text-lg font-bold text-[#E2E8F0] mb-3">Contact</h2>
              <p className="text-[#94A3B8] leading-relaxed text-sm">If you have any questions about our use of cookies email us at hello@seed-digital.ai.</p>
            </div>
  
          </div>
  
          <div className="mt-16 pt-8 border-t border-[#1E293B]">
            <a href="/" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">← Back to Seed Digital</a>
          </div>
        </div>
      </main>
    );
  }