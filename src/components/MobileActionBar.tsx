"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/content/site-data";

export interface MobileActionBarProps {
  isDrawerOpen?: boolean;
}

export function MobileActionBar({ isDrawerOpen = false }: MobileActionBarProps) {
  if (isDrawerOpen) return null;

  const phone = siteData.profile.phones[0];
  const whatsappUrl = `https://wa.me/${siteData.profile.whatsappNumber}?text=Hi%20Arifa%2C%20I%20came%20across%20your%20closing%20portfolio.`;

  return (
    <aside
      aria-label="Mobile quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0A0A0E]/90 backdrop-blur-lg border-t border-white/10 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#13131A] border border-white/10 text-[#F4F1EE] font-medium text-xs tracking-wider uppercase hover:border-[#C5A880] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A880] text-[#0A0A0E] font-medium text-xs tracking-wider uppercase hover:bg-[#E6CA9E] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}

export default MobileActionBar;
