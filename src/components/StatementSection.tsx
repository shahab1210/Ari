"use client";

import React from "react";
import { motion } from "framer-motion";

export interface StatementSectionProps {
  className?: string;
}

export function StatementSection({ className = "" }: StatementSectionProps) {
  return (
    <section
      id="methodology"
      className={`w-full relative overflow-hidden ${className}`}
      aria-label="Methodology and Statement"
    >
      {/* UPPER DARK BLOCK */}
      <div className="w-full bg-transparent py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-[#C87D55]/15 text-[#C87D55] text-xs font-mono uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#C87D55]/30 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C87D55] animate-pulse" />
            <span>HOW WE WORK</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-3xl md:text-5xl lg:text-6xl font-normal tracking-[-0.04em] leading-tight"
          >
            <span className="block text-[#F4F1EE]">It&apos;s not high pressure.</span>
            <span className="block framer-gradient-text">It&apos;s absolute alignment.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-sm md:text-base text-[#636366] font-mono uppercase tracking-[0.15em]"
          >
            (OUR PROCESS IS AS SYSTEMATIC AS 1... 2... 3...)
          </motion.p>
        </div>
      </div>

      {/* TERRACOTTA BAND */}
      <div className="w-full bg-[#C87D55] py-16 md:py-20 px-6 relative overflow-hidden selection:bg-[#0A0A0E] selection:text-[#C87D55]">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left"
          >
            {/* Index number */}
            <span className="text-8xl md:text-9xl font-black text-[#0A0A0E]/20 leading-none select-none tracking-tighter -ml-1">
              01
            </span>

            {/* Title */}
            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#0A0A0E] tracking-tight">
              One Problem
            </h3>

            {/* Statement paragraph */}
            <p className="mt-6 text-base md:text-lg text-[#0A0A0E]/90 font-medium leading-relaxed max-w-3xl uppercase tracking-wide">
              I DO NOT SELL SQUARE FOOTAGE OR RAW MATERIALS. I ELIMINATE STRUCTURAL RESISTANCE. I FOCUS ON THE CORE VALUE DRIVER DELAYING TRANSACTION COMPLETION AND BRING EXPERTISE, CLARITY, AND EXECUTION ALIGNMENT TO CLOSE THE DEAL.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StatementSection;
