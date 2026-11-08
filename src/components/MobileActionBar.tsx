"use client";

import React from "react";
import { MessageCircle, FileDown } from "lucide-react";
import { siteData } from "@/content/site-data";
import { trackConversion } from "@/lib/analytics";

export interface MobileActionBarProps {
  isDrawerOpen?: boolean;
}

export function MobileActionBar({ isDrawerOpen = false }: MobileActionBarProps) {
  if (isDrawerOpen) return null;

  const whatsappUrl =
    siteData.profile.whatsappUrl ||
    `https://wa.me/918828087472?text=Hi%20Arifa,%20I%20reviewed%20your%20closing%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20project/executive%20opportunity`;

  return (
    <aside
      aria-label="Mobile quick actions"
      className="block md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0E]/90 backdrop-blur-lg border-t border-white/10 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex items-center gap-3 shadow-2xl"
    >
      {/* Action 1: WhatsApp / Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("click_whatsapp", { location: "mobile_bar" })}
        className="bg-[#C5A880] text-[#0A0A0E] flex-1 font-medium text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-[#E6CA9E] transition-all duration-200 active:scale-[0.98]"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Action 2: Download CV Button */}
      <a
        href="/assets/Arifa_Shaikh_CV.pdf"
        download="Arifa_Shaikh_CV.pdf"
        onClick={() => trackConversion("download_cv", { location: "mobile_bar" })}
        className="border border-white/20 text-[#F4F1EE] flex-1 font-medium text-xs py-3 rounded-full flex items-center justify-center gap-2 hover:border-[#C5A880] hover:text-[#C5A880] transition-all duration-200 active:scale-[0.98]"
      >
        <FileDown className="w-4 h-4 text-[#C5A880]" />
        <span>Download CV</span>
      </a>
    </aside>
  );
}

export default MobileActionBar;
