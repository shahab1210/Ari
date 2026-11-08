// ═══════════════════════════════════════════════════════
// SINGLE SOURCE OF TRUTH — ARIFA SHAIKH PORTFOLIO DATA
// Edit this file to update all content across the website.
// Metrics flagged with isPlaceholder: true are sample data.
// Replace with verified figures before public deployment.
// ═══════════════════════════════════════════════════════

export interface MetricItem {
  label: string;
  value: string;
  isPlaceholder: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  scope: string[];
  metrics: MetricItem[];
  tags: string[];
  isCurrent: boolean;
}

export const siteData = {
  // ── Profile ──────────────────────────────────────────
  profile: {
    name: "Arifa Shaikh",
    title: "Closing Manager",
    specialization: "Real Estate Advisory & Bespoke Turnkey Interiors",
    location: "Byculla, Mumbai - 400011",
    phones: ["+91 8828087472", "+91 8898878068"],
    email: "arifaanjum143@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/arifa-shaikh-9955a8254/",
    instagramUrl: "https://www.instagram.com/arifa_08_01/",
    whatsappUrl: "https://wa.me/918828087472",
    whatsappNumber: "918828087472",
    cvPath: "/assets/Arifa_Shaikh_CV.pdf",
    portraitPath: "/assets/arifa-portrait.jpg",
    skylinePath: "/assets/mumbai-skyline.jpg",
    mumbaiCoords: { lat: 18.9712, lng: 72.8331 },
  },

  // ── Hero Headline Copy ───────────────────────────────
  hero: {
    eyebrow: "Hi I am",
    subtitle: "Real Estate Advisory & Bespoke Turnkey Interiors",
    bio: "Real estate advisory professional and prime interior design closing specialist in Mumbai. Managing end-to-end walk-in conversions, high-stakes commercial negotiations, and cross-functional project onboarding.",
  },

  // ── Hero Statistics Bar ──────────────────────────────
  heroStats: [
    { label: "Years Exp.", value: "5+", isPlaceholder: false },
    { label: "Closed Volume", value: "₹185 Cr+", isPlaceholder: true },
    { label: "Walk-in Conversion", value: "28.4%", isPlaceholder: true },
  ] as MetricItem[],

  // ── Career Experience Timeline ───────────────────────
  experience: [
    {
      company: "Bonito Designs",
      role: "Closing Manager",
      period: "May 2026 – Present",
      location: "Mumbai, Maharashtra",
      scope: [
        "Direct walk-in client consultations in design experience centers",
        "High-value custom interior proposal negotiations and packaging",
        "Scope definition and cross-functional design-to-execution alignment",
        "Timeline mapping and delivery milestone coordination",
      ],
      metrics: [
        { label: "Turnkey Contracts Closed", value: "₹14.8 Cr", isPlaceholder: true },
        { label: "Avg. Proposal Ticket", value: "₹32.5 L", isPlaceholder: true },
        { label: "Walk-in to Booking", value: "31.2%", isPlaceholder: true },
        { label: "Onboarding SLA", value: "100%", isPlaceholder: true },
      ],
      tags: [
        "Custom Interior Sales",
        "Design-Execution Handover",
        "Client Relationship Mgmt",
        "High-Ticket Closing",
      ],
      isCurrent: true,
    },
    {
      company: "The Guardians Real Estate Advisory",
      role: "Closing Manager",
      period: "Nov 2023 – Dec 2025",
      location: "Mumbai, Maharashtra",
      scope: [
        "On-site closing management at major project launches",
        "High-stakes negotiations with HNWI buyers and investors",
        "Active pipeline follow-up and inventory absorption",
        "Site-office walk-in presentations and property tours",
      ],
      metrics: [
        { label: "Gross Property Sales", value: "₹142 Cr", isPlaceholder: true },
        { label: "Units Transacted", value: "114", isPlaceholder: true },
        { label: "Site-Visit Conversion", value: "26.8%", isPlaceholder: true },
        { label: "Avg. Closing Velocity", value: "18 Days", isPlaceholder: true },
      ],
      tags: [
        "Real Estate Negotiation",
        "Launch Inventory Absorption",
        "HNWI Presentations",
        "Pipeline Management",
      ],
      isCurrent: false,
    },
    {
      company: "Real Estate Services",
      role: "Pre-Sales Specialist",
      period: "Oct 2022 – Oct 2023",
      location: "Mumbai, Maharashtra",
      scope: [
        "Database lead outreach and high-intent qualification",
        "Weekend lineup coordination and site-visit scheduling",
        "Buyer requirement profiling and discovery interviews",
        "CRM pipeline documentation and follow-up tracking",
      ],
      metrics: [
        { label: "Leads Qualified", value: "1,450+", isPlaceholder: true },
        { label: "Site Attendance Rate", value: "78.4%", isPlaceholder: true },
        { label: "Pipeline Attribution", value: "₹28 Cr", isPlaceholder: true },
        { label: "Lead Latency Reduction", value: "15%", isPlaceholder: true },
      ],
      tags: [
        "Multi-Channel Outreach",
        "Pre-Sales Qualification",
        "Weekend Scheduling",
        "CRM Optimization",
      ],
      isCurrent: false,
    },
    {
      company: "Fifth Avenue Financial Services",
      role: "Sales Executive",
      period: "Jun 2021 – Sep 2022",
      location: "Mumbai, Maharashtra",
      scope: [
        "Financial eligibility assessments and requirement mapping",
        "Mortgage application processing and documentation",
        "Cross-coordination with banking and lending partners",
        "Client portfolio underwriting and compliance checks",
      ],
      metrics: [
        { label: "Mortgage Disbursed", value: "₹36.5 Cr", isPlaceholder: true },
        { label: "Document Compliance", value: "99.1%", isPlaceholder: true },
        { label: "Portfolios Underwritten", value: "180+", isPlaceholder: true },
        { label: "Banking Partners", value: "12", isPlaceholder: true },
      ],
      tags: [
        "Mortgage Underwriting",
        "Loan Documentation",
        "Banking Coordination",
        "Financial Mapping",
      ],
      isCurrent: false,
    },
  ] as ExperienceItem[],

  // ── Education ────────────────────────────────────────
  education: {
    degree: "Bachelor of Commerce (B.Com)",
    specialization: "Accounting",
    period: "July 2016 – March 2017",
    focus: [
      "Cost Accounting & Commercial Law",
      "Financial Management & Audit Control",
      "Business Process Optimization",
    ],
  },

  // ── Languages ────────────────────────────────────────
  languages: [
    { name: "English", proficiency: "Professional" },
    { name: "Hindi", proficiency: "Native / Fluent" },
    { name: "Urdu", proficiency: "Fluent" },
  ],

  // ── Core Competencies ────────────────────────────────
  competencies: [
    {
      title: "Commercial Closing & Negotiation",
      description: "High-ticket conversions, pipeline velocity management, and structured deal-closing across luxury real estate and interior contracts.",
    },
    {
      title: "Client Requirement Discovery",
      description: "Translating architectural concepts, design visions, and financial parameters into finalized agreements and actionable project scopes.",
    },
    {
      title: "End-to-End Onboarding",
      description: "Documentation handling, cross-functional team coordination, and client lifecycle management from first meeting to project handover.",
    },
  ],

  // ── Tools & Domain Stack ─────────────────────────────
  tools: [
    "CRM & Lead Management Platforms",
    "Google Workspace",
    "Microsoft Office Suite",
    "Financial & Mortgage Documentation",
    "Property Listing Portals",
    "WhatsApp Business",
  ],
} as const;

export type SiteData = typeof siteData;
