'use client';

import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { siteData, type MetricItem } from '@/content/site-data';

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const isDev = process.env.NODE_ENV === 'development';
  const heroStats: readonly MetricItem[] = siteData.heroStats;

  return (
    <section id="hero" className="relative w-full pt-36 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* 1. Eyebrow */}
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#636366]">
              Hi I am
            </span>

            {/* Name & Title Block */}
            <div className="space-y-1">
              {/* 2. Name */}
              <h1 className="text-[#F4F1EE] text-4xl md:text-6xl font-normal tracking-[-0.04em]">
                Arifa Shaikh
              </h1>

              {/* 3. Title */}
              <div className="champagne-gradient-text text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
                Closing Manager
              </div>
            </div>

            {/* 4. Subtitle */}
            <p className="text-lg text-[#A1A1A6]">
              Real Estate Advisory &amp; Bespoke Turnkey Interiors
            </p>

            {/* 5. Bio paragraph */}
            <p className="text-base md:text-lg text-[#A1A1A6] font-light max-w-xl leading-relaxed">
              Real estate advisory professional and prime interior design closing specialist in Mumbai. Managing end-to-end walk-in conversions, high-stakes commercial negotiations, and cross-functional project onboarding.
            </p>

            {/* 6. Social icons row */}
            <div className="flex items-center gap-4">
              <a
                href={siteData.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A880] hover:text-[#C5A880] text-[#A1A1A6] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteData.profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A880] hover:text-[#C5A880] text-[#A1A1A6] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918828087472"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A880] hover:text-[#C5A880] text-[#A1A1A6] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:arifaanjum143@gmail.com"
                aria-label="Email Contact"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A880] hover:text-[#C5A880] text-[#A1A1A6] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* 7. Button group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0E] font-medium text-sm hover:bg-[#E6CA9E] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Hire Me
              </button>
              <a
                href="/assets/Arifa_Shaikh_CV.pdf"
                download
                className="px-8 py-3.5 rounded-full border border-white/15 text-[#F4F1EE] font-medium text-sm hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
              >
                Download CV
              </a>
            </div>

            {/* 8. Floating metric pill bar */}
            <div className="pt-6 w-full sm:w-auto">
              <div className="inline-grid grid-cols-3 gap-6 p-4 rounded-2xl bg-[#13131A]/90 backdrop-blur-xl border border-white/15 hover:border-[#C5A880]/60 shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:shadow-[0_0_45px_rgba(197,168,128,0.45)] transition-all duration-500">
                {heroStats.map((stat, idx) => {
                  const isPlaceholder = Boolean(stat.isPlaceholder);
                  const isFirstTwo = idx < 2;

                  return (
                    <div
                      key={stat.label}
                      className={`flex flex-col ${isFirstTwo ? 'border-r border-white/5 pr-4' : ''}`}
                    >
                      <div className="flex items-center">
                        <span className="text-xl md:text-2xl font-bold text-[#C5A880]">
                          {stat.value}
                        </span>
                        {isPlaceholder && isDev && (
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 ml-1.5 align-middle animate-pulse"
                            title="Placeholder metric (requires candidate verification)"
                            aria-label="Placeholder metric"
                          />
                        )}
                      </div>
                      <span className="text-xs text-[#636366] uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Intense Warm Radial Ambient Back-Glow */}
            <div
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#C5A880]/40 via-[#E6CA9E]/25 to-transparent blur-3xl -z-10 animate-pulse pointer-events-none"
              aria-hidden="true"
            />
            {/* Supporting Radial Glow */}
            <div
              className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full bg-[#C5A880]/20 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Portrait frame */}
            <div className="relative w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full overflow-hidden border-2 border-[#C5A880]/60 shadow-[0_0_50px_rgba(197,168,128,0.35)] bg-[#13131A] flex items-center justify-center">
              {/* Initials Fallback (rendered behind image) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#13131A] select-none text-center p-6">
                <span className="text-6xl md:text-8xl font-serif font-light champagne-gradient-text tracking-wider">
                  AS
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880]/70 mt-3 font-mono">
                  Arifa Shaikh
                </span>
              </div>

              {/* Real Portrait Image */}
              <img
                src="/assets/arifa-portrait.jpg"
                alt="Arifa Shaikh - Closing Manager"
                className="w-full h-full object-cover object-[center_16%] relative z-10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
