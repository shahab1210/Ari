"use client";

import React from "react";
import { siteData } from "@/content/site-data";
import { CheckCircle2, Award, Compass, Layers, Wrench } from "lucide-react";

export function Competencies() {
  const icons = [Award, Compass, Layers];

  return (
    <section id="competencies" className="relative w-full py-24 bg-transparent text-[#F4F1EE] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#636366] block mb-2">
              [ 04 / CORE CAPABILITIES ]
            </span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] text-[#F4F1EE]">
              Commercial Expertise & Domain Stack
            </h2>
          </div>
          <p className="text-sm text-[#A1A1A6] max-w-md font-light leading-relaxed">
            Bridging architectural ambition with financial and contract reality across Mumbai&apos;s luxury property and interior ecosystems.
          </p>
        </div>

        {/* 3 Interactive Cards with Ambient Rim-Lighting & Glow Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteData.competencies.map((comp, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={comp.title}
                className="relative p-8 rounded-2xl bg-[#13131A]/90 backdrop-blur-xl border border-white/15 hover:border-[#C5A880]/60 shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:shadow-[0_0_45px_rgba(197,168,128,0.45)] transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A24] border border-white/10 flex items-center justify-center text-[#C5A880] mb-6 group-hover:scale-110 group-hover:border-[#C5A880]/40 group-hover:shadow-[0_0_20px_rgba(197,168,128,0.25)] transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#F4F1EE] mb-3 group-hover:text-[#C5A880] transition-colors">
                  {comp.title}
                </h3>
                <p className="text-sm text-[#A1A1A6] font-light leading-relaxed">
                  {comp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tools & Domain Stack Bar */}
        <div className="p-8 rounded-2xl bg-[#13131A]/90 backdrop-blur-xl border border-white/15 hover:border-[#C5A880]/60 shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:shadow-[0_0_45px_rgba(197,168,128,0.45)] transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1A1A24] border border-white/10 flex items-center justify-center text-[#C5A880]">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F4F1EE]">Tools & Operational Stack</div>
              <div className="text-xs text-[#636366]">Platforms utilized across client lifecycle management</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {siteData.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#1A1A24] text-[#A1A1A6] border border-white/5 hover:border-[#C5A880]/40 hover:text-[#F4F1EE] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competencies;
