# Master Antigravity Execution Prompt
## Production-Grade Build Directive for Arifa Shaikh Portfolio

> **How to use this prompt**:  
> You can pass this prompt directly into Antigravity (CLI or Agent Chat) along with the `PRD.md` file located at the root of the project. It instructs the agent to autonomously scaffold, configure, build, and verify the entire Next.js 15 application.

---

```markdown
SYSTEM DIRECTIVE & MISSION OBJECTIVE:
Act as a Principal Creative Technologist and Full-Stack Systems Engineer. Your objective is to build a production-grade, highly optimized, dark-mode luxury portfolio website for ARIFA SHAIKH, an elite Closing Manager in Luxury Real Estate Advisory and Bespoke Turnkey Interiors based in Byculla, Mumbai.

Refer strictly to the PRD file at `PRD.md` and the candidate's CV at `Arifa CV.pdf`.
The application must unite the visual finesse of modern Framer agency designs (such as withhoney.com) with the engineering rigor of Next.js 15 (App Router), React 19, Tailwind CSS v4, Lucide React, Framer Motion, and Cobe (WebGL Globe).

KEY ARCHITECTURAL & DESIGN DIRECTIVES:
1. DESIGN SYSTEM & LUXURY ACCENT:
   - Do NOT use standard bright orange. Replace it with an architectural Champagne Bronze (`#C5A880`), Champagne Specular Glow (`#E6CA9E`), and Editorial Terracotta (`#C87D55`).
   - Canvas background: Deep Obsidian (`#0A0A0E`). Elevated surfaces: Graphite (`#13131A`). Cards: Slate Carbon (`#1A1A24`).
   - Implement Suisse-style typography with tight negative tracking (`-0.04em`), milk silk white headings (`#F4F1EE`), and muted platinum body text (`#A1A1A6`).
   - Use CSS gradient text clipping masks (`.framer-gradient-text` and `.champagne-gradient-text`).

2. SINGLE SOURCE OF TRUTH & PLACEHOLDER DATA GOVERNANCE:
   - Put 100% of the candidate data, copy, metrics, and experience points inside `content/site-data.ts`.
   - Every metric must have a `placeholder: boolean` flag.
   - For all placeholder metrics (e.g., ₹185 Cr+ volume, 28.4% conversion), render a subtle indicator during development so it is obvious to Arifa where her real verified numbers will be inserted.
   - All factual data from Arifa's CV must be accurately represented:
     * Bonito Designs (May 2026 – Present): Closing Manager (Bespoke turnkey home interior sales, commercial packaging, timeline mapping, design-execution alignment).
     * The Guardians Real Estate Advisory (Nov 2023 – Dec 2025): Closing Manager (Walk-in conversions at site offices, HNWI presentations, pipeline follow-ups).
     * Real Estate Services (Oct 2022 – Oct 2023): Pre-Sales Specialist (High-intent lead qualification, database outreach, weekend site-visit line-ups).
     * Fifth Avenue Financial Services (Jun 2021 – Sep 2022): Sales Executive (Financial requirement mapping, mortgage documentation, banking coordination).
     * Education: Bachelor of Commerce (B.Com) – Accounting (July 2016 – March 2017).
     * Contact: arifaanjum143@gmail.com, +91 8828087472 / +91 8898878068, Byculla, Mumbai.
     * Languages: English (Professional), Hindi (Native/Fluent), Urdu (Fluent).

3. SECTION-BY-SECTION VISUAL IMPLEMENTATION:
   - Navbar (`components/Navbar.tsx`): Fixed frosted-glass header with circular "AS" monogram medallion, anchor navigation, and "Retain Advisory" action button.
   - Hero Section (`components/HeroSection.tsx` - Reference Img 1):
     * Left: Monospace eyebrow `HI I AM`, Name `Arifa Shaikh`, Gradient Title `Closing Manager`, Subtitle `Real Estate Advisory & Bespoke Turnkey Interiors`, concise bio, social icons, action buttons (`Hire Me` opening drawer, `Download CV`), and floating 3-metric stats bar (`5+ Years Exp.`, `₹185 Cr+ Closed Vol.`, `28.4% Conversion`).
     * Right: High-resolution circular executive portrait frame with 1px metallic champagne border, outer radial glow, and monochrome contrast.
   - Editorial Statement Banner (`components/StatementSection.tsx` - Reference Img 5):
     * Upper dark section with `#HOW WE WORK` terracotta badge and headline "It's not high pressure. It's absolute alignment."
     * Full-bleed Terracotta band (`#C87D55`) with deep dark charcoal text: "01 One Problem: I DO NOT SELL SQUARE FOOTAGE OR RAW MATERIALS. I ELIMINATE STRUCTURAL RESISTANCE..."
   - Cosmic Starfield & Friction Deck (`components/FrictionCards.tsx` - Reference Img 4):
     * HTML5 Canvas 2D starfield rendering ~180 twinkling particles (with requestAnimationFrame and IntersectionObserver pause).
     * Subtle outlined background typography: `ALIGNMENT` (4% opacity).
     * 3 Glassmorphic cards with champagne numbered indices:
       [01] SPECIFICATION DRIFT
       [02] COMMUNICATION VOID
       [03] FINANCIAL CLOSURE
   - Track Record & Experience (`components/TrackRecord.tsx`):
     * Scannable chronological career timeline with quantitative badges, company tenures, scope bullets, and core skill tags.
     * Compact row for B.Com Accounting and multilingual fluency.
   - Core Competencies & Tool Stack (`components/Competencies.tsx`):
     * Interactive cards for Commercial Closing, Requirement Discovery, and End-to-End Onboarding.
     * Tools badges: CRM platforms, Google Workspace, Microsoft Office, financial underwriting workflows.
   - Interactive 3D WebGL Globe (`components/GlobeSection.tsx` - Reference Img 2):
     * Powered by lightweight `cobe` library.
     * Left column: Monospace `RIGHT NOW`, headline `two dots on a globe`, live telemetry ("you are reading this from somewhere near [City], where it is [Temp]°C right now. I am based in Mumbai, where it is [MumbaiTemp]°C. Small world."), italic prompt `give it a spin ->`.
     * Right column: Dark dotted 3D globe with glowing marker on Mumbai (`[18.9712, 72.8331]`) and dynamic visitor dot, draggable with momentum physics.
   - Mumbai Skyline Panorama & Contact CTA (`components/MumbaiSkyline.tsx` & `Footer.tsx` - Reference Img 3):
     * Full-bleed monochrome photograph of the South Mumbai skyline with an inverted top/bottom gradient alpha mask.
     * Headline: "Let's close something great."
     * Centered button: `PEN A NOTE` (with pen icon) triggering the Contact Drawer.
     * Footer bar with monogram, links (`LINKEDIN`, `EXECUTIVE DOSSIER`, `WHATSAPP`, `EMAIL`), and formal copyright notice.
   - Slide-Over Contact Drawer (`components/ContactDrawer.tsx`):
     * Right slide-over panel with backdrop blur, full keyboard focus trap, Esc key dismissal, and field validation.
     * Inquiry types: Executive Recruitment, Real Estate Advisory, Turnkey Interior Consultation, General.
   - Mobile Sticky Action Bar (`components/MobileActionBar.tsx`):
     * Persistent bottom bar on screens <810px for direct Call and WhatsApp consultation.

EXECUTION INSTRUCTIONS:
1. Initialize the Next.js 15 app with TypeScript and Tailwind CSS v4 in the current directory if not already scaffolded.
2. Install `cobe`, `framer-motion`, `lucide-react`, and `zod`.
3. Set up the design tokens in `app/globals.css`.
4. Create `content/site-data.ts` as the single source of truth.
5. Create all components in `components/` and wire them into `app/page.tsx`.
6. Run `npm run build` to verify there are zero TypeScript or bundling errors.
```
