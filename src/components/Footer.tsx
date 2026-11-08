'use client';

import React from 'react';
import { trackConversion } from '@/lib/analytics';

export interface FooterProps {
  onOpenContact: () => void;
  className?: string;
}

interface FooterLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: () => void;
}

const footerLinks: FooterLink[] = [
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/arifa-shaikh-9955a8254/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/arifa_08_01/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'EXECUTIVE DOSSIER',
    href: '/assets/Arifa_Shaikh_CV.pdf',
    download: 'Arifa_Shaikh_CV.pdf',
    onClick: () => trackConversion('download_cv', { location: 'footer' }),
  },
  {
    label: 'WHATSAPP',
    href: 'https://wa.me/918828087472?text=Hi%20Arifa,%20I%20reviewed%20your%20closing%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20project/executive%20opportunity',
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: () => trackConversion('click_whatsapp', { location: 'footer' }),
  },
  {
    label: 'EMAIL',
    href: 'mailto:arifaanjum143@gmail.com',
  },
];

export function Footer({ onOpenContact, className = '' }: FooterProps) {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`w-full bg-transparent border-t border-white/5 pt-12 pb-28 md:pb-12 px-6 pb-[calc(7rem+env(safe-area-inset-bottom))] md:pb-12 ${className}`}
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP ROW: flex flex-col md:flex-row items-center justify-between gap-8 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Circular monogram 'AS' */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={handleScrollToTop}
              aria-label="Return to top of page"
              className="w-12 h-12 rounded-full border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] font-mono text-sm tracking-widest hover:border-[#C5A880] hover:shadow-[0_0_15px_rgba(197,168,128,0.25)] transition-all duration-300 group"
            >
              <span className="group-hover:scale-105 transition-transform duration-200">AS</span>
            </a>
          </div>

          {/* Center: Monospace links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                download={link.download}
                onClick={link.onClick}
                className="text-xs font-mono uppercase tracking-[0.2em] text-[#636366] hover:text-[#C5A880] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: button onClick={onOpenContact} */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="text-xs font-mono uppercase tracking-[0.2em] text-[#636366] hover:text-[#C5A880] transition-colors cursor-pointer bg-transparent border-0 p-0"
              aria-label="Pen a note - open contact drawer"
            >
              PEN A NOTE
            </button>
          </div>
        </div>

        {/* BOTTOM ROW (mt-8 pt-8 border-t border-white/5) */}
        <div className="mt-8 pt-8 border-t border-white/5 space-y-2">
          <p className="text-center text-xs text-[#A1A1A6] font-mono tracking-normal leading-relaxed">
            Byculla, Mumbai • Serving Mumbai, Thane &amp; Mumbra • arifaanjum143@gmail.com • +91 8828087472
          </p>
          <p className="text-center text-xs text-[#636366] font-mono tracking-normal leading-relaxed">
            © 2026 ARIFA SHAIKH (ANJUM). CLOSING MANAGER — REAL ESTATE &amp; BESPOKE INTERIORS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
