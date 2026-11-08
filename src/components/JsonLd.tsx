import React from "react";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://arifa-olive.vercel.app/#person",
        "name": "Arifa Shaikh",
        "alternateName": [
          "Arifa Shaikh Anjum",
          "Arifa Anjum",
          "Arifa Closing Manager"
        ],
        "jobTitle": "Closing Manager",
        "description": "High-performing Closing Manager specializing in Mumbai, Thane, and Mumbra real estate transactions and turnkey interior design contracts.",
        "image": "https://arifa-olive.vercel.app/assets/arifa-portrait.jpg",
        "url": "https://arifa-olive.vercel.app",
        "telephone": "+91-8828087472",
        "email": "arifaanjum143@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Byculla",
          "addressRegion": "Mumbai",
          "postalCode": "400011",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Thane" },
          { "@type": "Place", "name": "Mumbra" },
          { "@type": "AdministrativeArea", "name": "Mumbai Metropolitan Region" }
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Bachelor of Commerce (B.Com) - Accounting"
        },
        "worksFor": [
          {
            "@type": "Organization",
            "name": "Bonito Designs"
          },
          {
            "@type": "Organization",
            "name": "The Guardians Real Estate Advisory"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/arifa-shaikh-9955a8254/",
          "https://www.instagram.com/arifa_08_01/"
        ],
        "knowsAbout": [
          "Real Estate Sales Closing",
          "Turnkey Interior Design Sales",
          "High-Stakes Contract Negotiation",
          "Lead Conversion & Pipeline Velocity",
          "Mortgage & Property Financial Documentation"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://arifa-olive.vercel.app/#website",
        "url": "https://arifa-olive.vercel.app",
        "name": "Arifa Shaikh Portfolio",
        "publisher": { "@id": "https://arifa-olive.vercel.app/#person" }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default JsonLd;
