import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-[#1a3a2a] py-12 border-t border-[#f5f0e8]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-syne text-xl font-light text-[#f5f0e8] mb-3">Seed <span className="text-[#c8a96e]">Digital</span></div>
            <p className="text-sm text-[#f5f0e8]/50 leading-relaxed">AI transformation consultancy for Bath, Bristol and Somerset. Tool-agnostic. The right solution for your need, not vendor loyalty.</p>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/30 mb-4">Navigation</div>
            <div className="flex flex-col gap-2">
              <Link href="/ai-audit" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">AI Audit</Link>
              <Link href="/services" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Services</Link>
              <Link href="/web" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Web design</Link>
              <a href="https://cro.seed-digital.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">Free conversion audit</a>
              <Link href="/#about" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors">About</Link>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/30 mb-4">Get in touch</div>
            <a href="https://calendly.com/djrdunton/talk-to-dan" target="_blank" rel="noopener noreferrer" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors block mb-2">Book a discovery call</a>
            <a href="mailto:hello@seed-digital.ai" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors block mb-2">hello@seed-digital.ai</a>
            <p className="text-sm text-[#f5f0e8]/30">Bath · Bristol · Somerset</p>
          </div>
        </div>
        <div className="border-t border-[#f5f0e8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#f5f0e8]/30">© 2026 Seed Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/terms" className="text-xs text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors">Terms and Conditions</a>
            <a href="/privacy" className="text-xs text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors">Privacy Policy</a>
            <a href="/cookies" className="text-xs text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors">Cookie Policy</a>
          </div>
          <p className="text-xs text-[#f5f0e8]/30">Seed Digital is a trading name of DJRD Ltd · Registered in England and Wales · Company no. 16103531</p>
        </div>
      </div>
    </footer>
  );
}
