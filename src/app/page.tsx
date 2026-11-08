"use client";

import React, { useState } from "react";
import { GlobalStarfield } from "@/components/GlobalStarfield";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatementSection } from "@/components/StatementSection";
import { FrictionCards } from "@/components/FrictionCards";
import { TrackRecord } from "@/components/TrackRecord";
import { Competencies } from "@/components/Competencies";
import { GlobeSection } from "@/components/GlobeSection";
import { MumbaiSkyline } from "@/components/MumbaiSkyline";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function PortfolioPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <main className="relative min-h-screen w-full bg-transparent text-[#F4F1EE] overflow-x-hidden pb-20 md:pb-0">
      {/* ── Global Slow-Motion Starfield Background (z-0) ── */}
      <GlobalStarfield />

      {/* ── Foreground Content Container (z-10) ─────────── */}
      <div className="relative z-10 w-full">
        {/* Fixed Frosted Navigation */}
        <Navbar onOpenContact={openContact} />

        {/* Hero Viewport (Screenshot 1) */}
        <HeroSection onOpenContact={openContact} />

        {/* Editorial Statement (Screenshot 5) */}
        <StatementSection />

        {/* Strategic Friction Deck (Screenshot 4) */}
        <FrictionCards />

        {/* Career Track Record & Milestones */}
        <TrackRecord />

        {/* Core Competencies & Domain Tools */}
        <Competencies />

        {/* Interactive 3D Globe (Screenshot 2) */}
        <GlobeSection />

        {/* Mumbai Skyline & CTA (Screenshot 3) */}
        <MumbaiSkyline onOpenContact={openContact} />

        {/* Footer Terminal */}
        <Footer onOpenContact={openContact} />

        {/* Slide-Over Contact Drawer */}
        <ContactModal isOpen={isContactOpen} onClose={closeContact} />

        {/* Sticky Mobile Action Bar */}
        <MobileActionBar isDrawerOpen={isContactOpen} />
      </div>
    </main>
  );
}
