import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Toaster } from "sonner";

// ─── Fonts ────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// ─── SEO Metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    // — Identity & Brand
    "Narendran C",
    "Infygru",
    "naren.info",
    // — Primary Role
    "Lead Solutions Architect",
    "Freelance Solutions Architect",
    "Remote Solutions Architect",
    "Lead Solutions Architect Chennai",
    "Lead Solutions Architect Freelance UK",
    "Freelance Solutions Architect Travel Industry",
    // — Travel Tech (highest-value niche)
    "Travel Tech Developer UK",
    "Travel Tech Developer UAE",
    "Travel Tech Platform Developer India",
    "Next.js Travel Booking System Developer",
    "Next.js Travel Platform Developer",
    "Tour Operator Technology Developer UK",
    "Tour Operator Booking System Next.js",
    "Travel Agency CRM Automation Developer",
    "Travel Website Developer UK",
    "Hire Next.js Developer Travel Industry",
    "Travel Startup Full Stack Architect India UK",
    "Hotel Booking System Developer React Next.js",
    "GDS API Integration Developer",
    "Headless CMS Travel Website Developer UK",
    // — n8n Automation
    "n8n Automation Specialist Freelance",
    "n8n Workflow Developer",
    "n8n AI Agent Workflow Developer",
    "n8n Automation Travel Agency",
    "Business Process Automation n8n",
    "CRM Automation Developer",
    "Workflow Automation n8n Zapier Make",
    "WhatsApp Booking Automation n8n",
    // — Infrastructure / DevOps
    "Self-hosted Infrastructure Consultant",
    "Coolify Deployment Consultant",
    "KVM VPS Self-hosted Deployment Consultant",
    "Self-hosted PaaS Developer Coolify VPS",
    "KVM VPS Ubuntu",
    // — Compliance & Verticals
    "GDPR Compliant Web Developer UK Freelance",
    "GDPR Website Developer India",
    "Healthcare Portal Developer GDPR UK",
    "UK Compliance Web Platform",
    "Recruitment Portal Developer Next.js",
    "ATS Integration Developer",
    // — Stack
    "Next.js Developer India",
    "Next.js Developer UAE Dubai Remote",
    "Full Stack Engineer",
    "Full Stack Developer Travel Tourism UK",
    // — Geo
    "Freelance Web Developer Chennai India UK Clients",
    "Freelance Developer UK UAE India Remote",
    "Solutions Architect Remote Relocate Globally",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Lead Solutions Architect Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  alternates: { canonical: SITE_CONFIG.url },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0F",
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#person`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/avatar.jpg`,
    sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github, SITE_CONFIG.twitter],
    jobTitle: "Lead Solutions Architect",
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Next.js", "Travel Tech Development", "n8n Workflow Automation",
      "GDPR Compliance", "Self-hosted Infrastructure", "Coolify", "KVM VPS",
      "Travel Booking Systems", "Full Stack Development", "Solutions Architecture",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#service`,
    name: "Narendran C — Freelance Solutions Architect",
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/og-image.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    priceRange: "$$",
    founder: { "@id": `${SITE_CONFIG.url}/#person` },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: [
      "Travel Tech Development",
      "n8n Workflow Automation",
      "GDPR-Compliant Web Development",
      "Self-hosted Infrastructure Consulting",
      "Next.js Full Stack Development",
      "Solutions Architecture",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freelance Solutions Architecture Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Travel Tech Development", description: "Next.js travel booking platforms, tour operator systems, and GDS integrations for UK, UAE, and India travel brands." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "n8n Automation", description: "Workflow automation, CRM pipelines, lead routing, and AI agent workflows using n8n." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GDPR-Compliant Web Development", description: "Secure, compliant web platforms aligned with UK GDPR, healthcare regulations, and data privacy standards." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Self-hosted Infrastructure", description: "KVM VPS provisioning, Coolify deployment, Nginx reverse proxy, and server management." } },
      ],
    },
    review: [
      { "@type": "Review", author: { "@type": "Person", name: "James Whitfield" }, reviewBody: "Platform scored 99 Performance and 100 SEO on day one of launch. Organic enquiries doubled.", reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 } },
      { "@type": "Review", author: { "@type": "Person", name: "Sarah Thompson" }, reviewBody: "Delivered a GDPR-compliant healthcare platform we trust completely.", reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 } },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { "@id": `${SITE_CONFIG.url}/#person` },
  },
];

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1C1C26",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#F1F0FF",
            },
          }}
        />
      </body>
    </html>
  );
}
