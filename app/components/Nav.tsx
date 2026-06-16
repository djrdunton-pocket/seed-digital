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
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0F172A]/85 backdrop-blur border-b border-[#1E293B]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Seed Digital home" className="flex items-center">
          <Image
            src="/seed-logo-nav.png"
            alt="Seed Digital"
            width={992}
            height={301}
            priority
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={CALENDLY_URL}
            {...externalLinkProps}
            className="hidden md:inline-block px-6 py-2.5 text-sm tracking-wide font-semibold rounded-xl bg-[#A3E635] text-[#0F172A] hover:bg-[#A3E635]/90 transition-colors"
          >
            Book a call
          </a>

          <button
            className="md:hidden text-[#E2E8F0] text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-[#1E293B] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#94A3B8]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            {...externalLinkProps}
            className="text-sm font-semibold rounded-xl bg-[#A3E635] text-[#0F172A] px-5 py-2 text-center"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
