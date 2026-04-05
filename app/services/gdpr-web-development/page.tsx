import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GDPR-Compliant Web Developer UK — Healthcare, Travel & Recruitment Platforms",
  description:
    "Freelance GDPR-compliant web developer for UK businesses. Healthcare portals, travel websites, and recruitment platforms built to UK GDPR, accessibility (WCAG AA), and industry regulatory standards. Based in India, serving UK clients remotely.",
  keywords: [
    "GDPR compliant web developer UK freelance", "GDPR website developer India",
    "healthcare portal developer GDPR UK", "UK compliance web platform developer",
    "recruitment portal developer GDPR", "travel website GDPR UK developer",
    "WCAG accessibility developer UK", "CQC compliant healthcare website",
    "UK data protection web developer", "GDPR Next.js developer",
    "UK regulated platform developer", "ATS integration GDPR recruitment",
    "freelance developer GDPR UK India", "secure web platform developer UK",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/services/gdpr-web-development` },
  openGraph: {
    title: "GDPR-Compliant Web Developer UK — Healthcare, Travel & Recruitment | Narendran C",
    description:
      "Freelance GDPR-compliant web developer. Healthcare, travel & recruitment platforms built to UK regulatory standards. Remote from India, trusted by UK clients.",
    url: `${SITE_CONFIG.url}/services/gdpr-web-development`,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const gdprJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GDPR-Compliant Web Development",
  provider: { "@id": `${SITE_CONFIG.url}/#person` },
  description:
    "Secure, GDPR-compliant web platforms for UK businesses in healthcare, travel, and recruitment sectors. Built to UK regulatory standards with WCAG accessibility and data privacy at the core.",
  areaServed: [{ "@type": "Country", name: "United Kingdom" }],
  serviceType: "GDPR-Compliant Web Development",
  url: `${SITE_CONFIG.url}/services/gdpr-web-development`,
};

export default function GdprWebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gdprJsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="label-text">Service</span>
            <h1 className="section-title mt-2">
              GDPR-Compliant <span className="text-gradient">Web Developer</span>
            </h1>
            <p className="text-ink-400 mt-4 text-lg leading-relaxed">
              Secure, compliant web platforms for <strong>UK businesses</strong> in healthcare, travel, and recruitment.
              Built to <strong>UK GDPR</strong>, <strong>WCAG AA accessibility</strong>, and industry-specific
              regulatory standards — trusted by UK clients since 2021.
            </p>
          </div>

          {/* Sectors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink-100 mb-6">Regulated Sectors I Serve</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  sector: "Healthcare",
                  tags: ["CQC alignment", "NHS data standards", "GDPR Art. 9 special data", "WCAG 2.1 AA"],
                  example: "Aster Homecare UK — secure homecare provider platform",
                },
                {
                  sector: "Travel & Tourism",
                  tags: ["ATOL-aware design", "Cookie consent (ICO)", "Payment data (PCI-DSS)", "GDPR-ready"],
                  example: "MyPerfectTrips UK — 100 SEO, GDPR-compliant travel platform",
                },
                {
                  sector: "Recruitment",
                  tags: ["Candidate data privacy", "UK employment law", "ATS GDPR integration", "Right-to-erasure flows"],
                  example: "Smarthire Recruitment UK — compliant staffing portal with n8n ATS integration",
                },
              ].map((s) => (
                <div key={s.sector} className="card rounded-2xl p-6">
                  <h3 className="font-semibold text-ink-100 mb-3">{s.sector}</h3>
                  <ul className="space-y-1 mb-4">
                    {s.tags.map((t) => (
                      <li key={t} className="text-ink-500 text-xs">✓ {t}</li>
                    ))}
                  </ul>
                  <p className="text-ink-600 text-xs italic">{s.example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink-100 mb-6">What GDPR Compliance Means in Practice</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Cookie Consent Management", desc: "ICO-compliant cookie banners with granular consent categories, auto-blocking of third-party scripts before consent." },
                { title: "Privacy Policy & Legal Pages", desc: "Technically accurate privacy and data retention pages reflecting your actual data flows — not just legal templates." },
                { title: "Data Minimisation Architecture", desc: "Forms and APIs architected to collect only necessary data, with appropriate retention and deletion mechanisms." },
                { title: "Secure Self-hosted Infrastructure", desc: "Hardened KVM VPS with SSL, firewall rules, fail2ban, and restricted access — your data stays on your own server." },
                { title: "Accessibility (WCAG 2.1 AA)", desc: "Semantic HTML, ARIA attributes, keyboard navigation, sufficient colour contrast — tested and documented." },
                { title: "Right-to-Erasure Flows", desc: "User data deletion workflows and admin controls built into the platform — compliant with Subject Access Requests." },
              ].map((item) => (
                <div key={item.title} className="card rounded-2xl p-5">
                  <h3 className="font-semibold text-ink-100 mb-2 text-sm">{item.title}</h3>
                  <p className="text-ink-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-12 card rounded-2xl p-8">
            <blockquote className="text-ink-300 italic leading-relaxed">
              &ldquo;Healthcare platforms have to be right — GDPR, accessibility, CQC alignment — there&apos;s no room
              for shortcuts. Naren understood this immediately. He asked the right questions, flagged things we
              hadn&apos;t even thought of, and delivered a platform we trust completely.&rdquo;
            </blockquote>
            <p className="text-ink-500 text-sm mt-4">— Sarah Thompson, Registered Manager, Aster Homecare UK</p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-ink-400 mb-6">
              Building a regulated platform for a UK audience? Let&apos;s make compliance a feature, not a footnote.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "var(--accent-primary)", color: "#fff" }}
            >
              Discuss Your Compliance Requirements
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
