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
    "Narendran C",
    "Lead Solutions Architect Chennai",
    "Next.js Developer India",
    "n8n Automation Expert",
    "Self-hosted VPS Coolify",
    "Travel Tech Platform Developer",
    "Full Stack Engineer",
    "UK Compliance Web Platform",
    "KVM VPS Ubuntu",
    "Business Process Automation",
    "Infygru",
    "Remote Solutions Architect",
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
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/avatar.jpg`,
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github, SITE_CONFIG.twitter],
  jobTitle: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
