'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CALENDLY_URL, externalLinkProps } from './constants';

const links = [
  { label: 'AI Audit', href: '/ai-audit' },
  { label: 'Services', href: '/services' },
  { label: 'Web', href: '/web' },
  { label: 'About', href: '/#about' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f5f0e8]/80 backdrop-blur border-b border-[#1a3a2a]/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Seed Digital home" className="flex items-center">
          <Image
            src="/Seed-logo_2_june26.png"
            alt="Seed Digital"
            width={1600}
            height={912}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#1a3a2a]/70 hover:text-[#1a3a2a] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={CALENDLY_URL}
            {...externalLinkProps}
            className="hidden md:inline-block px-6 py-2.5 text-sm tracking-wide bg-[#1a3a2a] text-[#f5f0e8] hover:bg-[#1a3a2a]/90 transition-colors"
          >
            Book a call
          </a>

          <button
            className="md:hidden text-[#1a3a2a] text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#f5f0e8] border-t border-[#1a3a2a]/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#1a3a2a]/70"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            {...externalLinkProps}
            className="text-sm bg-[#1a3a2a] text-[#f5f0e8] px-5 py-2 text-center"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
