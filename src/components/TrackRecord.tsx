'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Languages } from 'lucide-react';
import { siteData } from '@/content/site-data';

export interface TrackRecordProps {
  className?: string;
}

export function TrackRecord({ className = '' }: TrackRecordProps) {
  const experiences = siteData?.experience ?? [];

  return (
    <section
      id="track-record"
      className={`relative w-full py-24 bg-transparent text-[#F4F1EE] border-t border-white/5 ${className}`}
      aria-label="Career Track Record and Milestone Timeline"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#636366] mb-4">
          <Briefcase className="w-3.5 h-3.5 text-[#C5A880]" aria-hidden="true" />
          <span>[ CAREER TRAJECTORY ]</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] text-[#F4F1EE] mb-16">
          Track Record
        </h2>

        {/* TIMELINE */}
        <div className="relative space-y-12">
          {/* Vertical continuous line connecting milestone dots */}
          <div
            className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-[#C5A880]/60 via-[#C5A880]/20 to-transparent"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => {
            const isCurrent = exp.isCurrent ?? index === 0;

            return (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="relative pl-12"
              >
                {/* Milestone Node Dot */}
                <div
                  className="absolute left-[8px] top-6 w-[15px] h-[15px] rounded-full border-2 border-[#C5A880] bg-[#0A0A0E] flex items-center justify-center z-10"
                  aria-hidden="true"
                >
                  {isCurrent && (
                    <span className="absolute inset-[3px] rounded-full bg-[#C5A880] animate-pulse" />
                  )}
                </div>

                {/* Milestone Card Container with Ambient Rim-Lighting Shadow */}
                <div className="p-6 md:p-8 rounded-2xl bg-[#13131A]/90 backdrop-blur-xl border border-white/15 hover:border-[#C5A880]/60 shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:shadow-[0_0_45px_rgba(197,168,128,0.45)] transition-all duration-500 group">
                  {/* Company Name */}
                  <div className="flex items-center flex-wrap gap-2.5">
                    <h3 className="text-xl font-semibold text-[#F4F1EE] group-hover:text-[#E6CA9E] transition-colors">
                      {exp.company}
                    </h3>
                    {isCurrent && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#C5A880]/15 text-[#E6CA9E] border border-[#C5A880]/30">
                        Current Tenure
                      </span>
                    )}
                  </div>

                  {/* Role & Period */}
                  <div className="text-sm text-[#C5A880] font-mono mt-1.5">
                    {exp.role} • {exp.period}
                  </div>

                  {/* Location */}
                  <div className="text-xs text-[#636366] mt-1">
                    {exp.location}
                  </div>

                  {/* Scope Bullets */}
                  {exp.scope && exp.scope.length > 0 && (
                    <ul className="mt-4 space-y-2 list-none">
                      {exp.scope.map((scopeItem, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start text-sm text-[#A1A1A6] leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60 mt-2 mr-2.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span>{scopeItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Metrics Row */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {exp.metrics.map((metric, mIdx) => {
                        const isPlaceholder = Boolean(
                          metric.isPlaceholder ??
                            (metric as { placeholder?: boolean }).placeholder
                        );
                        const showPlaceholderDot =
                          isPlaceholder && process.env.NODE_ENV === 'development';

                        return (
                          <div
                            key={mIdx}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-[#1A1A24] border border-white/5 transition-colors hover:border-[#C5A880]/40"
                          >
                            {showPlaceholderDot && (
                              <span
                                title="Sample/Unverified Metric (Development)"
                                className="w-1.5 h-1.5 rounded-full bg-[#C87D55] animate-pulse flex-shrink-0"
                                aria-label="Placeholder metric indicator"
                              />
                            )}
                            <span className="text-[#C5A880] font-medium">
                              {metric.value}
                            </span>
                            <span className="text-[#636366]">{metric.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Tags Row */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded bg-[#C5A880]/10 text-[#C5A880]/80 font-mono tracking-tight border border-[#C5A880]/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AFTER TIMELINE */}
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-[#13131A]/90 backdrop-blur-xl border border-white/15 hover:border-[#C5A880]/60 shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:shadow-[0_0_45px_rgba(197,168,128,0.45)] transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880]">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
              Education
            </span>
          </div>

          <div className="text-lg font-semibold text-[#F4F1EE]">
            {siteData.education?.degree || 'Bachelor of Commerce (B.Com) – Accounting'}
          </div>

          <div className="text-sm font-mono text-[#636366] mt-1">
            {siteData.education?.period || 'July 2016 – March 2017'}
          </div>

          <p className="mt-3 text-sm text-[#A1A1A6] leading-relaxed">
            {siteData.education?.focus ||
              'Focused on business systems optimization, accounting principles, and financial management.'}
          </p>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-6 p-6 md:p-8 rounded-2xl bg-[#13131A]/90 backdrop-blur-xl border border-white/15 hover:border-[#C5A880]/60 shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:shadow-[0_0_45px_rgba(197,168,128,0.45)] transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880]">
              <Languages className="w-4 h-4" aria-hidden="true" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
              Languages
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {siteData.languages && siteData.languages.length > 0 ? (
              siteData.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#1A1A24] border border-white/5 transition-colors hover:border-[#C5A880]/25"
                >
                  <span className="text-[#F4F1EE] font-medium">{lang.name}</span>
                  <span className="text-[#636366]">({lang.proficiency})</span>
                </div>
              ))
            ) : (
              <>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#1A1A24] border border-white/5">
                  <span className="text-[#F4F1EE] font-medium">English</span>
                  <span className="text-[#636366]">(Professional)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#1A1A24] border border-white/5">
                  <span className="text-[#F4F1EE] font-medium">Hindi</span>
                  <span className="text-[#636366]">(Native/Fluent)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#1A1A24] border border-white/5">
                  <span className="text-[#F4F1EE] font-medium">Urdu</span>
                  <span className="text-[#636366]">(Fluent)</span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrackRecord;
