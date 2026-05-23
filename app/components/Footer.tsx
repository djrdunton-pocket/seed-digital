export default function Footer() {
  return (
    <>
      {/* Contact / Enquiry form section */}
      <section id="contact" className="bg-[#f5f0e8] py-24 border-t border-[#1a3a2a]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">Get in touch</span>
              </div>
              <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-6">Start your project</h2>
              <p className="text-[#1a3a2a]/60 leading-relaxed mb-6">Tell us about your business and what you need. We will get back to you within 24 hours.</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                  <span className="text-sm text-[#1a3a2a]/60">Fixed price. No surprises.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                  <span className="text-sm text-[#1a3a2a]/60">Response within 24 hours.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                  <span className="text-sm text-[#1a3a2a]/60">Based in Bath. Happy to meet in person.</span>
                </div>
              </div>
            </div>
            <div>
              <iframe
                src="https://tally.so/embed/zx1D28?alignLeft=1&hideTitle=1&transparentBackground=1"
                width="100%"
                height="500"
                frameBorder="0"
                title="Seed Digital Enquiry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a2a] py-12 border-t border-[#f5f0e8]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="font-syne text-2xl font-bold text-[#f5f0e8] mb-3">Seed <span className="text-[#c8a96e]">Digital</span></div>
              <p className="text-sm text-[#f5f0e8]/50 leading-relaxed">Fixed-price websites for Bath, Bristol and Somerset.</p>
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/30 mb-4">Navigation</div>
              <div className="flex flex-col gap-2">
                <a href="#packages" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Packages</a>
                <a href="#portfolio" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Portfolio</a>
                <a href="#about" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">About</a>
                <a href="#faq" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">FAQ</a>
                <a href="#contact" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/30 mb-4">Get in touch</div>
              <a href="mailto:hello@seed-digital.ai" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors block mb-2">hello@seed-digital.ai</a>
              <p className="text-sm text-[#f5f0e8]/30">Bath · Bristol · Somerset</p>
            </div>
          </div>
          <div className="border-t border-[#f5f0e8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#f5f0e8]/30">© 2026 Seed Digital. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/terms" className="text-xs text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors">Terms and Conditions</a>
              <a href="/privacy" className="text-xs text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors">Privacy Policy</a>
            </div>
            <p className="text-xs text-[#f5f0e8]/30">Seed Digital is a trading name of DJRD Ltd · Registered in England and Wales · Company no. 16103531</p>
          </div>
        </div>
      </footer>
    </>
  );
}