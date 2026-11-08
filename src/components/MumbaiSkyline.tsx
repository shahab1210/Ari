'use client';

import React from 'react';
import Image from 'next/image';
import { PenLine } from 'lucide-react';
import { motion } from 'framer-motion';

export interface MumbaiSkylineProps {
  onOpenContact: () => void;
  className?: string;
}

export function MumbaiSkyline({ onOpenContact, className = '' }: MumbaiSkylineProps) {
  return (
    <section
      id="contact"
      className={`relative w-full bg-transparent text-[#F4F1EE] overflow-hidden ${className}`}
      aria-label="Contact and Mumbai Skyline"
    >
      {/* SKYLINE IMAGE AREA */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        {/* Next.js Image component */}
        <Image
          src="/assets/mumbai-skyline.jpg"
          alt="Mumbai Skyline Panorama"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover grayscale opacity-60"
        />

        {/* Overlay gradient: top/bottom fade into canvas background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #0A0A0E 0%, transparent 30%, transparent 60%, #0A0A0E 100%)',
          }}
          aria-hidden="true"
        />

        {/* CENTER CTA (absolute, centered over skyline) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.04em] text-[#F4F1EE] text-center">
              Let&apos;s close something great.
            </h2>

            <p className="text-base text-[#A1A1A6] mt-4 text-center max-w-xl">
              From site-visit to signed agreement, I bring expertise, alignment, and closure.
            </p>

            <motion.button
              type="button"
              onClick={onOpenContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 flex items-center gap-3 px-8 py-4 rounded-full bg-[#C5A880] text-[#0A0A0E] font-medium text-sm hover:bg-[#E6CA9E] transition-all shadow-[0_4px_24px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_32px_rgba(230,202,158,0.35)] cursor-pointer group"
              aria-label="Open contact drawer to pen a note"
            >
              <PenLine className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
              <span className="tracking-wider uppercase font-semibold text-xs">PEN A NOTE</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MumbaiSkyline;
