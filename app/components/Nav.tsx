'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8] border-b border-[#1a3a2a]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-syne text-xl text-[#1a3a2a] tracking-tight">
          Seed <span className="text-[#c8a96e]">Digital</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#packages" className="text-sm text-[#1a3a2a]/70 hover:text-[#1a3a2a] transition-colors">
            Packages
          </Link>
          <Link href="#portfolio" className="text-sm text-[#1a3a2a]/70 hover:text-[#1a3a2a] transition-colors">
            Portfolio
          </Link>
          <Link href="#about" className="text-sm text-[#1a3a2a]/70 hover:text-[#1a3a2a] transition-colors">
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm bg-[#1a3a2a] text-[#f5f0e8] px-5 py-2 hover:bg-[#1a3a2a]/90 transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1a3a2a]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f0e8] border-t border-[#1a3a2a]/10 px-6 py-4 flex flex-col gap-4">
          <Link href="#packages" onClick={() => setMenuOpen(false)} className="text-sm text-[#1a3a2a]/70">Packages</Link>
          <Link href="#portfolio" onClick={() => setMenuOpen(false)} className="text-sm text-[#1a3a2a]/70">Portfolio</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="text-sm text-[#1a3a2a]/70">About</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="text-sm bg-[#1a3a2a] text-[#f5f0e8] px-5 py-2 text-center">Get started</Link>
        </div>
      )}
    </nav>
  );
}