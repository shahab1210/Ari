'use client';

import React from 'react';

interface FrictionCardItem {
  index: string;
  title: string;
  body: string;
}

const frictionCards: FrictionCardItem[] = [
  {
    index: '01',
    title: 'SPECIFICATION DRIFT.',
    body: 'High-value clients and corporate investors are frequently sold on conceptual renderings that fail to match financial parameters and build timelines. Without rigorous pre-qualification and clear scope definition, early enthusiasm turns into prolonged deal stagnation.',
  },
  {
    index: '02',
    title: 'COMMUNICATION VOID.',
    body: 'When contracts are signed without operational alignment between sales and execution teams, onboarding breaks down. Bridging design deliverables with construction timelines protects customer satisfaction and prevents order cancellation.',
  },
  {
    index: '03',
    title: 'FINANCIAL CLOSURE.',
    body: 'Closing high-ticket real estate and bespoke interiors requires more than sales charm—it demands financial modeling, lending documentation, and transparent contract governance.',
  },
];

export function FrictionCards() {
  return (
    <section
      id="methodology"
      className="relative w-full py-32 bg-transparent text-[#F4F1EE] overflow-hidden"
    >
      {/* Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 whitespace-nowrap text-[12vw] font-black uppercase tracking-tighter opacity-[0.03] text-transparent"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
      >
        ALIGNMENT
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16 text-xs font-mono uppercase tracking-[0.2em] text-[#636366]">
          <span>[ 03 / STRATEGIC METHODOLOGY ]</span>
          <span>THE ANATOMY OF EXECUTION</span>
        </div>

        {/* Card Deck with Ambient Rim-Lighting & Glow Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frictionCards.map((card) => (
            <article
              key={card.index}
              className="relative p-8 rounded-2xl bg-[#13131A]/90 backdrop-blur-xl border border-white/15 hover:border-[#C5A880]/60 shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:shadow-[0_0_45px_rgba(197,168,128,0.45)] transition-all duration-500 group"
            >
              {/* Card Index */}
              <div className="text-sm font-mono text-[#C5A880] mb-6 font-semibold">
                [{card.index}]
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold tracking-tight text-[#F4F1EE] mb-4 group-hover:text-[#C5A880] transition-colors">
                {card.title}
              </h3>

              {/* Card Body */}
              <p className="text-sm text-[#A1A1A6] font-light leading-relaxed">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrictionCards;
