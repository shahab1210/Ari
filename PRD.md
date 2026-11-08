# Product Requirements Document (PRD)
## Elite Executive Portfolio & Client Acquisition Asset for Arifa Shaikh
**Target Role**: Closing Manager — Luxury Real Estate Advisory & Bespoke Turnkey Interiors  
**Location Base**: Byculla, Mumbai, Maharashtra, India  
**Target Environment**: Next.js 15 (App Router), React 19, Tailwind CSS v4, Framer Motion, Cobe (WebGL), TypeScript Strict  
**Author**: Antigravity Principal Systems Architect & Creative Technologist  
**Status**: Ready for Build / Scaffolding  

---

## 1. Executive Summary & Strategic Positioning

### 1.1 Purpose
To construct an ultra-premium, dark-mode personal portfolio and lead-generation asset for **Arifa Shaikh**. The site serves as a dual-funnel digital asset:
1. **Corporate Talent Acquisition / Executive Search Funnel**: Demonstrates auditable deal-closing capability, commercial negotiation volume, gross margin preservation, and cross-functional team orchestration to C-level real estate developers, VP of Sales, and recruitment leadership.
2. **Private High-Net-Worth Individual (HNWI) Client Advisory Funnel**: Establishes immediate trust, discretion, bespoke interior understanding, financial structuring competence, and turnkey execution clarity for luxury home buyers and interior design investors.

### 1.2 Core Business Goals
- **5-Second Authority Anchor**: Immediate visual gravitas above the fold featuring a high-contrast circular portrait, champagne bronze accents, verified executive credentials, and key commercial indicators.
- **Auditable Performance Scannability**: Structured career progression timeline highlighting key tenures (Bonito Designs, The Guardians, Real Estate Services, Fifth Avenue Financial Services).
- **Interactive Technical Polish**: WebGL 3D dotted globe with live location telemetry (connecting the visitor to Mumbai), and an HTML5 canvas starry particle background behind strategic execution cards.
- **Single Source of Truth (`content/site-data.ts`)**: Non-technical editable architecture allowing Arifa to swap placeholder metrics, phone numbers, and assets in under two minutes without modifying UI components.
- **Conversion Pathways**: High-converting slide-over Contact Drawer, 1-click WhatsApp connection, and direct executive CV download (`/assets/Arifa_Shaikh_CV.pdf`).

---

## 2. Target Audience & CTA Routing

| Audience Segment | Primary Evaluation Criteria | Primary Conversion Action |
| :--- | :--- | :--- |
| **A. Executive Search & Real Estate Leadership** (VPs of Sales, CCOs, Founders) | Closed sales volume, conversion velocity, unit sales, inventory absorption, leadership | `Hire Me` / `Download CV` |
| **B. Private Clients & Investors** (HNWI Homebuyers, Turnkey Interior Clients) | Discretion, process transparency, requirement discovery, stress-free execution | `Pen a Note` / `WhatsApp Consultation` |

---

## 3. Placeholder Data Policy & Verification Governance

> **CRITICAL COMPLIANCE NOTICE**:  
> To protect Arifa Shaikh's professional reputation during recruitment background checks, all unverified commercial figures are treated as strict placeholders until verified.

1. **Flagged Data Schema**: Every numerical metric in `content/site-data.ts` contains a `{ value: string, placeholder: boolean }` structure.
2. **Development Badge**: In `development` mode, any metric with `placeholder: true` displays a subtle amber badge `[SAMPLE METRIC]`.
3. **Build Guard (`scripts/check-placeholders.mjs`)**: Running `npm run build` with `STRICT_PLACEHOLDERS=1` scans `content/site-data.ts` and alerts if unverified numbers remain before public deployment.

---

## 4. Verified Candidate Background (From CV)

- **Candidate**: Arifa Shaikh
- **Current Position**: Closing Manager at **Bonito Designs** (May 2026 – Present)
  - *Scope*: Direct walk-in consultations in experience centers, bespoke interior requirement discovery, high-ticket proposal packaging, and design-to-execution team handoffs.
- **Previous Position 1**: Closing Manager at **The Guardians Real Estate Advisory** (Nov 2023 – Dec 2025)
  - *Scope*: Site-office presentations for luxury residential projects, pipeline negotiations, buyer follow-ups, and transaction closures.
- **Previous Position 2**: Pre-Sales Specialist at **Real Estate Services** (Oct 2022 – Oct 2023)
  - *Scope*: High-intent lead generation, database qualification, and weekend site-visit lineup coordination.
- **Previous Position 3**: Sales Executive at **Fifth Avenue Financial Services** (Jun 2021 – Sep 2022)
  - *Scope*: Real estate financial requirement profiling, loan documentation processing, and banking partner coordination.
- **Education**: Bachelor of Commerce (B.Com) – Accounting (July 2016 – March 2017)
- **Contact Details**: 
  - Phone: `+91 8828087472` / `+91 8898878068`
  - Email: `arifaanjum143@gmail.com`
  - Location: Byculla, Mumbai - 400011
  - Languages: English (Professional), Hindi (Native/Fluent), Urdu (Fluent)
- **Core Competencies**: High-stakes negotiation, walk-in conversion, client onboarding, financial requirement mapping, mortgage workflows, CRM systems.

---

## 5. Design System & Visual Architecture

### 5.1 Palette & Color Tokens (Tailwind CSS v4 `@theme`)
Replacing standard primary orange with **Champagne Bronze** and **Editorial Terracotta**:

```css
@theme {
  --color-canvas: #0A0A0E;            /* Root deep obsidian */
  --color-surface-elevated: #13131A;  /* Floating bars, inputs, drawers */
  --color-surface-card: #1A1A24;      /* Slate cards & glass surfaces */
  --color-accent-champagne: #C5A880;  /* Primary luxury metallic */
  --color-accent-glow: #E6CA9E;       /* Specular highlights & active hover */
  --color-accent-terracotta: #C87D55; /* Editorial statement accent */
  --color-text-heading: #F4F1EE;      /* Milk silk white */
  --color-text-body: #A1A1A6;         /* Neutral platinum */
  --color-text-muted: #636366;        /* Monospace slate labels */
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-highlight: rgba(197, 168, 128, 0.40);
}
```

### 5.2 Typography & Gradient Masks
- **Headlines**: Inter Display / Suisse-style Grotesk with `-0.04em` tracking and `1.1` line height.
- **Monospace Accents**: JetBrains Mono / IBM Plex Mono for badges and section numbers (`0.25em` letter spacing).
- **Italic Prompts**: Editorial Serif Italic (Playfair Display / Instrument Serif) for playful guidance ("give it a spin →").
- **Gradient Text Classes**:
  ```css
  .framer-gradient-text {
    background-image: linear-gradient(227deg, #8E8E93 0%, #F4F1EE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .champagne-gradient-text {
    background-image: linear-gradient(135deg, #E6CA9E 0%, #C5A880 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ```

---

## 6. Page Architecture & Screenshot Mapping

### Section 1: Fixed Frosted Navigation (`components/Navbar.tsx`)
- Left: Circular monogram medallion `AS` with champagne border.
- Center: Anchor links (`Overview`, `Methodology`, `Track Record`, `Contact`).
- Right: Pill button `Retain Advisory` opening the slide-over contact drawer.
- Mobile: Responsive backdrop blur with compact menu trigger.

### Section 2: Dark Hero Viewport (Screenshot 1 Reference - `components/HeroSection.tsx`)
- Two-column layout (7/5 desktop, stacked on mobile).
- **Left Column**:
  - Eyebrow: `HI I AM` in `#636366` mono.
  - Heading: `Arifa Shaikh` in `#F4F1EE` (`clamp(2.75rem, 5vw, 4.25rem)`).
  - Title: `Closing Manager` in `.champagne-gradient-text`.
  - Subtitle: `Real Estate Advisory & Bespoke Turnkey Interiors`.
  - Bio: *"Real estate advisory professional and prime interior design closing specialist in Mumbai. Managing end-to-end walk-in conversions, high-stakes commercial negotiations, and cross-functional project onboarding."*
  - Action Row: Circular icons for LinkedIn, WhatsApp, and Email.
  - Buttons: Solid Champagne `Hire Me` + Outline `Download CV` (`/assets/Arifa_Shaikh_CV.pdf`).
  - **Floating Metric Pill Bar**:
    - `5+ Years` | Advisory Experience
    - `₹185 Cr+` | Closed Transaction Volume *(Placeholder)*
    - `28.4%` | Walk-in Conversion Rate *(Placeholder)*
- **Right Column**:
  - Circular executive frame (`clamp(320px, 38vw, 460px)`) with metallic border, outer glow, and monochrome executive portrait.

### Section 3: High-Contrast Editorial Statement (Screenshot 5 Reference - `components/StatementSection.tsx`)
- Upper Block: `#HOW WE WORK` terracotta badge + *"It's not high pressure. It's absolute alignment."*
- Full-Bleed Terracotta Band (`#C87D55`) with deep dark charcoal typography:
  - `01 One Problem`
  - *"I DO NOT SELL SQUARE FOOTAGE OR RAW MATERIALS. I ELIMINATE STRUCTURAL RESISTANCE. I FOCUS ON THE CORE VALUE DRIVER DELAYING TRANSACTION COMPLETION AND BRING EXPERTISE, CLARITY, AND EXECUTION ALIGNMENT TO CLOSE THE DEAL."*

### Section 4: Cosmic Starfield & Strategic Friction Cards (Screenshot 4 Reference - `components/FrictionCards.tsx`)
- Animated 2D HTML5 Canvas Starfield (~180 particles, subtle twinkle, paused when off-screen).
- Large watermarked typography: `ALIGNMENT` across background (4% opacity).
- 3 Glassmorphic Cards:
  1. `[01] SPECIFICATION DRIFT`: Resolving mismatch between conceptual 3D renders and real-world construction/budgets.
  2. `[02] COMMUNICATION VOID`: Aligning design promises with execution milestones to avoid post-signing dropouts.
  3. `[03] FINANCIAL CLOSURE`: Structuring payment milestones, mortgage paperwork, and transparent agreements.

### Section 5: Track Record & Auditable Experience (`components/TrackRecord.tsx`)
- Vertical timeline on desktop, collapsible accordion on mobile.
- All roles with key achievements, placeholder flags, and commercial tags:
  - **Bonito Designs**: ₹14.8 Cr turnkey interiors closed, ₹32.5 L avg ticket, 31.2% booking conversion.
  - **The Guardians**: ₹142 Cr gross property sales, 114 units closed, 26.8% site-visit conversion.
  - **Real Estate Services**: 1,450+ qualified leads, 78.4% site attendance, ₹28 Cr pipeline attribution.
  - **Fifth Avenue Financial**: ₹36.5 Cr mortgage disbursement, 180+ files, 12 banking partners.
- Education & Languages card (B.Com Accounting; English, Hindi, Urdu).

### Section 6: Core Competencies & Domain Tools (`components/Competencies.tsx`)
- Interactive competency cards with subtle hover glow.
- Verified tool chips: CRM platforms, Google Workspace, MS Office, loan documentation workflows.

### Section 7: Interactive 3D WebGL Globe (Screenshot 2 Reference - `components/GlobeSection.tsx`)
- Built on `cobe` (lightweight ~5KB WebGL library).
- Left column:
  - `RIGHT NOW`
  - Headline: `two dots on a globe`
  - Dynamic telemetry: *"you are reading this from somewhere near {city}, where it is {temp}°C right now. I am based in Mumbai, where it is {mumbaiTemp}°C. Small world."*
  - Italic prompt: *"give it a spin →"*
- Right column: WebGL canvas with interactive inertia drag, dark styling, glowing Mumbai marker, and visitor location dot.

### Section 8: Mumbai Skyline & Closing CTA (Screenshot 3 Reference - `components/MumbaiSkyline.tsx` & `Footer.tsx`)
- Full-bleed monochrome panorama of Mumbai skyline (Lower Parel / Worli corridor).
- Inverted alpha gradient mask fading the skyline into `#0A0A0E`.
- Headline: *"Let's close something great."*
- Centered interactive trigger: `PEN A NOTE` (with pen icon) opening the contact drawer.
- Footer bar: `AS` circular monogram, social links (`LINKEDIN`, `EXECUTIVE DOSSIER`, `WHATSAPP`, `EMAIL`), and legal copyright notice:  
  *© 2026 ARIFA SHAIKH. CLOSING MANAGER — REAL ESTATE & BESPOKE INTERIORS. BYCULLA, MUMBAI.*

### Section 9: Slide-Over Contact Drawer (`components/ContactDrawer.tsx`)
- Smooth right-side slide-over with backdrop blur, focus trapping, and `Escape` key listener.
- Fields: Full Name, Email, WhatsApp / Phone, Organization, Inquiry Type (`Executive Recruitment`, `Real Estate Advisory`, `Turnkey Interior Consultation`, `General`), Budget Range, Message.
- Integration: API route `/api/contact` with spam prevention honeypot and email notification dispatch.

### Section 10: Sticky Mobile Action Bar (`components/MobileActionBar.tsx`)
- Appears only on mobile (<810px) at viewport bottom:
  - `Call (+91 8828087472)`
  - `WhatsApp Consultation`
- Respects `safe-area-inset-bottom` and hides automatically when the contact drawer is open.

---

## 7. Single Source of Truth Content Schema (`content/site-data.ts`)

```typescript
export interface MetricItem {
  label: string;
  value: string;
  placeholder: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  scope: string[];
  metrics: MetricItem[];
  tags: string[];
}

export const siteData = {
  profile: {
    name: "Arifa Shaikh",
    title: "Closing Manager",
    specialization: "Real Estate Advisory & Bespoke Turnkey Interiors",
    location: "Byculla, Mumbai - 400011",
    phones: ["+91 8828087472", "+91 8898878068"],
    email: "arifaanjum143@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/arifa-shaikh", // Editable
    whatsappNumber: "918828087472",
    cvPath: "/assets/Arifa_Shaikh_CV.pdf",
    portraitPath: "/assets/arifa-portrait.jpg",
  },
  heroStats: [
    { label: "Years Exp.", value: "5+", placeholder: false },
    { label: "Closed Volume", value: "₹185 Cr+", placeholder: true },
    { label: "Walk-in Conversion", value: "28.4%", placeholder: true },
  ],
  // All experiences, competencies, and copy fully structured here...
};
```

---

## 8. Non-Functional & Engineering Benchmarks
- **Lighthouse Targets**: Mobile Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- **Bundle Optimization**: Lazy-load Cobe WebGL (`next/dynamic`, `ssr: false`). Starfield canvas strictly throttled via `requestAnimationFrame` with `IntersectionObserver` auto-pause.
- **Accessibility**: All interactive targets ≥ 44px; high contrast ratio ≥ 7.0:1 on headers and ≥ 4.5:1 on paragraphs; ARIA focus trapping on drawer.
