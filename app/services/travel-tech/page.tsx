import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Travel Tech Developer — Next.js Travel Booking & Tour Operator Systems",
  description:
    "Hire a specialist travel tech developer for UK, UAE, and India. Next.js travel booking platforms, tour operator portals, GDS API integrations, and high-performance travel websites that score 99+ on Google PageSpeed.",
  keywords: [
    "travel tech developer UK", "Next.js travel booking system developer",
    "tour operator technology UK", "travel platform developer UAE",
    "travel website developer India", "GDS API integration developer",
    "hotel booking system Next.js", "tour operator booking system",
    "travel agency CRM automation", "headless CMS travel website",
    "travel startup full stack developer", "hire travel tech developer",
    "Next.js travel platform", "travel tech architect UK UAE India",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/services/travel-tech` },
  openGraph: {
    title: "Travel Tech Developer — Next.js Booking Platforms | Narendran C",
    description:
      "Specialist travel tech developer for UK, UAE & India brands. Next.js booking systems, tour operator portals & GDS integrations. 99 PageSpeed. GDPR-ready.",
    url: `${SITE_CONFIG.url}/services/travel-tech`,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const travelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Travel Tech Development",
  provider: { "@id": `${SITE_CONFIG.url}/#person` },
  description:
    "Next.js travel booking systems, tour operator portals, GDS API integrations, and high-performance travel websites for UK, UAE, and India brands.",
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Travel Tech Development",
  url: `${SITE_CONFIG.url}/services/travel-tech`,
};

export default function TravelTechPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelJsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="label-text">Service</span>
            <h1 className="section-title mt-2">
              Travel Tech <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-ink-400 mt-4 text-lg leading-relaxed">
              Specialist Next.js travel booking systems, tour operator portals, and GDS API
              integrations for travel &amp; tourism brands in the <strong>UK, UAE, and India</strong>.
              10+ years building travel platforms that rank #1 on Google and convert visitors into bookings.
            </p>
          </div>

          {/* What I Build */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink-100 mb-6">What I Build for Travel Brands</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Travel Booking Systems", desc: "Custom Next.js booking engines with real-time availability, instant quotes, and seamless payment flows — built for UK, UAE, and India markets." },
                { title: "Tour Operator Portals", desc: "B2B and B2C tour operator platforms with package management, itinerary builders, and multi-currency pricing for global travel companies." },
                { title: "GDS & API Integrations", desc: "Amadeus, Sabre, and third-party travel API integrations for flights, hotels, transfers, and insurance — fully automated via n8n." },
                { title: "Travel Agency CRM Automation", desc: "End-to-end CRM automation for travel agencies: lead routing, follow-up sequences, WhatsApp booking confirmations, and reporting dashboards." },
                { title: "High-Performance Travel Websites", desc: "Next.js travel websites scoring 99+ Performance and 100 SEO on Google PageSpeed — 0.4s FCP, mobile-first, and conversion-optimised." },
                { title: "GDPR-Compliant Platforms (UK)", desc: "Travel websites fully compliant with UK GDPR, cookie consent, and data privacy regulations — trusted by UK tour operators and travel agents." },
              ].map((item) => (
                <div key={item.title} className="card rounded-2xl p-6">
                  <h3 className="font-semibold text-ink-100 mb-2">{item.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Proof */}
          <section className="mb-12 card rounded-2xl p-8">
            <h2 className="text-xl font-bold text-ink-100 mb-4">Proven Travel Tech Results</h2>
            <ul className="space-y-3 text-ink-400 text-sm">
              <li>→ <strong className="text-ink-200">MyPerfectTrips (UK)</strong> — 99 Performance, 100 SEO, 0.4s FCP. Organic enquiries doubled post-launch.</li>
              <li>→ <strong className="text-ink-200">IG Holidays (India)</strong> — Mobile-first Next.js platform with automated deployments and 100 SEO score.</li>
              <li>→ <strong className="text-ink-200">Ecton Cars (UK)</strong> — Conversion-first cab booking platform with local SEO architecture capturing high-intent traffic.</li>
            </ul>
          </section>

          {/* Markets */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink-100 mb-4">Markets Served</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { market: "United Kingdom", detail: "GDPR-compliant, CQC/ATOL-aware, UK payment gateway integrations" },
                { market: "UAE & Dubai", detail: "Arabic/English bilingual support, UAE payment gateways, Gulf travel market expertise" },
                { market: "India", detail: "INR pricing, Indian payment gateways, domestic & outbound travel platforms" },
              ].map((m) => (
                <div key={m.market} className="card rounded-2xl p-5 text-center">
                  <p className="font-semibold text-ink-100 mb-1">{m.market}</p>
                  <p className="text-ink-500 text-xs leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-ink-400 mb-6">
              Available for remote work worldwide. Based in Chennai, India — open to UK/UAE relocation.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "var(--accent-primary)", color: "#fff" }}
            >
              Discuss Your Travel Platform
            </Link>
            <p className="text-ink-600 text-xs mt-4">
              <Link href="/" className="hover:text-ink-400 transition-colors">← Back to Portfolio</Link>
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
