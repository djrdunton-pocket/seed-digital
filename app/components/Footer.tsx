export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a3a2a] py-16 border-t border-[#f5f0e8]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-fraunces text-2xl text-[#f5f0e8] mb-3">Seed <span className="text-[#c8a96e]">Digital</span></div>
            <p className="text-sm text-[#f5f0e8]/50 leading-relaxed">Fixed-price websites for Bath, Bristol and Somerset.</p>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/30 mb-4">Navigation</div>
            <div className="flex flex-col gap-2">
              <a href="#packages" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Packages</a>
              <a href="#portfolio" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Portfolio</a>
              <a href="#about" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">About</a>
              <a href="#faq" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">FAQ</a>
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
          <p className="text-xs text-[#f5f0e8]/30">Bath · Bristol · Somerset · seed-digital.ai</p>
        </div>
      </div>
    </footer>
  );
}