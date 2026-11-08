'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export interface NavbarProps {
  onOpenContact: () => void;
}

interface NavLinkItem {
  name: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { name: 'Overview', href: '#hero' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Track Record', href: '#track-record' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleMonogramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0E]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left zone: Circular monogram medallion 'AS' */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#hero"
              onClick={handleMonogramClick}
              aria-label="Arifa Shaikh - Return to top"
              className="w-10 h-10 rounded-full border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] tracking-widest font-mono text-sm font-semibold hover:border-[#C5A880] hover:shadow-[0_0_15px_rgba(197,168,128,0.25)] transition-all duration-300 group"
            >
              <span className="group-hover:scale-105 transition-transform duration-200">AS</span>
            </a>
          </div>

          {/* Center zone: Desktop navigation links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#A1A1A6] hover:text-[#F4F1EE] transition-colors duration-200 tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right zone: Retain Advisory CTA and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center justify-center bg-[#C5A880] text-[#0A0A0E] font-medium text-sm px-6 py-2.5 rounded-full hover:bg-[#E6CA9E] transition-all duration-200 active:scale-95 shadow-sm hover:shadow-[0_0_20px_rgba(230,202,158,0.25)] cursor-pointer"
            >
              Retain Advisory
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#A1A1A6] hover:text-[#F4F1EE] hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C5A880]/40"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F4F1EE]" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-[#A1A1A6]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0E]/95 backdrop-blur-xl border-b border-white/5 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#A1A1A6] hover:text-[#F4F1EE] hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/5">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center bg-[#C5A880] text-[#0A0A0E] font-medium text-sm px-6 py-3 rounded-full hover:bg-[#E6CA9E] transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              Retain Advisory
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
