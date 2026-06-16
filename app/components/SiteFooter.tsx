import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-[#111827] py-12 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-syne text-xl font-light text-[#E2E8F0] mb-3">Seed <span className="text-[#22C55E]">Digital</span></div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">AI transformation consultancy for Bath, Bristol and Somerset. Tool-agnostic. The right solution for your need, not vendor loyalty.</p>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#94A3B8] mb-4">Navigation</div>
            <div className="flex flex-col gap-2">
              <Link href="/ai-audit" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">AI Audit</Link>
              <Link href="/services" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">Services</Link>
              <Link href="/web" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">Web design</Link>
              <a href="https://cro.seed-digital.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">Free conversion audit</a>
              <Link href="/#about" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">About</Link>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#94A3B8] mb-4">Get in touch</div>
            <a href="https://calendly.com/djrdunton/talk-to-dan" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors block mb-2">Book a discovery call</a>
            <a href="mailto:hello@seed-digital.ai" className="text-sm text-[#94A3B8] hover:text-[#E2E8F0] transition-colors block mb-2">hello@seed-digital.ai</a>
            <p className="text-sm text-[#94A3B8]">Bath · Bristol · Somerset</p>
          </div>
        </div>
        <div className="border-t border-[#1E293B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#94A3B8]">© 2026 Seed Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/terms" className="text-xs text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">Terms and Conditions</a>
            <a href="/privacy" className="text-xs text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">Privacy Policy</a>
            <a href="/cookies" className="text-xs text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">Cookie Policy</a>
          </div>
          <p className="text-xs text-[#94A3B8]">Seed Digital is a trading name of DJRD Ltd · Registered in England and Wales · Company no. 16103531</p>
        </div>
      </div>
    </footer>
  );
}
