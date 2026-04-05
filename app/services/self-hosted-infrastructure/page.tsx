import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Self-Hosted Infrastructure Consultant — Coolify, KVM VPS & Nginx Deployment",
  description:
    "Freelance self-hosted infrastructure consultant specializing in Coolify, KVM VPS (Ubuntu), Nginx reverse proxy, and SSL setup. Cost-effective, GDPR-friendly alternative to Vercel/Netlify for travel, healthcare, and business platforms.",
  keywords: [
    "self-hosted infrastructure consultant", "Coolify deployment consultant",
    "KVM VPS self-hosted deployment", "self-hosted PaaS developer Coolify",
    "KVM VPS Ubuntu developer", "Nginx reverse proxy setup consultant",
    "Coolify VPS setup freelance", "self-hosted Vercel alternative",
    "Next.js self-hosted deployment", "server infrastructure consultant India",
    "GDPR self-hosted infrastructure", "VPS deployment consultant UK",
    "sub 30% CPU load VPS optimization", "self-hosted server management",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/services/self-hosted-infrastructure` },
  openGraph: {
    title: "Self-Hosted Infrastructure Consultant — Coolify & KVM VPS | Narendran C",
    description:
      "Self-hosted infrastructure specialist: Coolify, KVM VPS, Nginx, SSL. Sub-30% CPU load. GDPR-friendly alternative to Vercel for UK & India businesses.",
    url: `${SITE_CONFIG.url}/services/self-hosted-infrastructure`,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const infraJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Self-Hosted Infrastructure Consulting",
  provider: { "@id": `${SITE_CONFIG.url}/#person` },
  description:
    "KVM VPS provisioning, Coolify deployment, Nginx reverse proxy, SSL management, and server monitoring. GDPR-friendly self-hosted infrastructure for Next.js and web applications.",
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Infrastructure Consulting",
  url: `${SITE_CONFIG.url}/services/self-hosted-infrastructure`,
};

export default function SelfHostedInfraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infraJsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="label-text">Service</span>
            <h1 className="section-title mt-2">
              Self-Hosted <span className="text-gradient">Infrastructure</span>
            </h1>
            <p className="text-ink-400 mt-4 text-lg leading-relaxed">
              KVM VPS provisioning, <strong>Coolify</strong>-managed deployments, Nginx reverse proxy,
              and SSL setup — maintaining <strong>sub-30% CPU load</strong> and under 50% memory usage across
              all production apps. The cost-effective, GDPR-friendly alternative to Vercel and Netlify.
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "<30%", label: "CPU Load (Avg)" },
              { value: "<50%", label: "Memory Usage" },
              { value: "99.9%", label: "Uptime" },
              { value: "0.4s", label: "FCP Achieved" },
            ].map((s) => (
              <div key={s.label} className="card rounded-2xl p-4 text-center">
                <p className="text-xl font-bold text-ink-100">{s.value}</p>
                <p className="text-ink-500 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink-100 mb-6">Infrastructure Stack</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "KVM VPS Provisioning (Ubuntu 22.04/24.04)", desc: "Full server setup from blank VPS: OS hardening, SSH security, firewall (ufw), fail2ban, swap, and automatic updates." },
                { title: "Coolify Self-Hosted PaaS", desc: "Deploy and manage Next.js, Node.js, WordPress, and any Docker-based app on your own VPS — zero vendor lock-in, GDPR-compliant." },
                { title: "Nginx Reverse Proxy", desc: "Multi-domain Nginx setup with HTTP/2, gzip compression, caching headers, and automatic SSL termination." },
                { title: "SSL & Domain Management", desc: "Let's Encrypt SSL with auto-renewal, wildcard certs, and custom domain routing for multiple apps on one server." },
                { title: "Server Monitoring & Alerting", desc: "CPU, memory, and disk monitoring with real-time alerting — so you know before your clients do." },
                { title: "n8n Self-Hosted Automation", desc: "n8n deployed on the same VPS with persistent workflows, proper backups, and zero external API costs." },
              ].map((item) => (
                <div key={item.title} className="card rounded-2xl p-6">
                  <h3 className="font-semibold text-ink-100 mb-2 text-sm">{item.title}</h3>
                  <p className="text-ink-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Self-host */}
          <section className="mb-12 card rounded-2xl p-8">
            <h2 className="text-xl font-bold text-ink-100 mb-4">Self-hosted vs. Vercel/Netlify</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-ink-400">
              <div>
                <p className="font-semibold text-ink-200 mb-2">Self-hosted (Coolify + KVM VPS)</p>
                <ul className="space-y-1">
                  <li>✓ Flat monthly VPS cost (~£10–40/mo for multiple apps)</li>
                  <li>✓ Data stays on your server — GDPR-friendly</li>
                  <li>✓ No bandwidth/build limits</li>
                  <li>✓ Full control over environment and configuration</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-ink-200 mb-2">Vercel / Netlify</p>
                <ul className="space-y-1">
                  <li>✗ Per-seat and bandwidth pricing at scale</li>
                  <li>✗ Data processed on third-party US servers</li>
                  <li>✗ Build minute limits on free/pro tiers</li>
                  <li>✗ Vendor lock-in with proprietary edge config</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-ink-400 mb-6">
              Want to own your infrastructure? I&apos;ll set it up, optimize it, and keep it running.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "var(--accent-primary)", color: "#fff" }}
            >
              Get an Infrastructure Consultation
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
