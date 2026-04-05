import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "n8n Automation Specialist — Workflow Automation for Travel, CRM & Lead Gen",
  description:
    "Freelance n8n automation specialist with 3,915+ production executions at 0% failure rate. CRM pipelines, lead routing, AI agent workflows, and WhatsApp booking automation for travel agencies and businesses in UK, UAE, and India.",
  keywords: [
    "n8n automation specialist freelance", "n8n workflow developer",
    "n8n travel agency automation", "n8n AI agent workflow developer",
    "workflow automation n8n Make Zapier", "CRM automation developer",
    "lead routing automation n8n", "WhatsApp booking automation n8n",
    "business process automation freelance", "n8n developer hire",
    "n8n automation UK UAE India", "n8n self-hosted workflow",
    "webhook pipeline developer", "API integration automation n8n",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/services/n8n-automation` },
  openGraph: {
    title: "n8n Automation Specialist — 3,915+ Executions, 0% Failure | Narendran C",
    description:
      "Freelance n8n developer with 3,915+ production executions at 0% failure rate. CRM pipelines, AI agents, travel booking automation for UK, UAE & India.",
    url: `${SITE_CONFIG.url}/services/n8n-automation`,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
};

const automationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "n8n Workflow Automation",
  provider: { "@id": `${SITE_CONFIG.url}/#person` },
  description:
    "n8n workflow automation for CRM pipelines, lead routing, travel booking automations, AI agent workflows, and webhook integrations. 3,915+ production executions at 0% failure rate.",
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Workflow Automation",
  url: `${SITE_CONFIG.url}/services/n8n-automation`,
};

export default function N8nAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automationJsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="label-text">Service</span>
            <h1 className="section-title mt-2">
              n8n Automation <span className="text-gradient">Specialist</span>
            </h1>
            <p className="text-ink-400 mt-4 text-lg leading-relaxed">
              Freelance n8n workflow developer with <strong>3,915+ production executions</strong> running at a
              flawless <strong>0% failure rate</strong>. CRM pipelines, lead routing, AI agent workflows,
              and travel booking automation for businesses in the <strong>UK, UAE, and India</strong>.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "3,915+", label: "Production Executions" },
              { value: "0%", label: "Failure Rate" },
              { value: "0.02s", label: "Avg Execution Time" },
            ].map((s) => (
              <div key={s.label} className="card rounded-2xl p-5 text-center">
                <p className="text-2xl font-bold text-ink-100">{s.value}</p>
                <p className="text-ink-500 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* What I Automate */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink-100 mb-6">Automation Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Travel Booking Automation", desc: "Automated booking confirmations, WhatsApp notifications, payment follow-ups, and GDS data sync for travel agencies." },
                { title: "CRM Pipeline Automation", desc: "Lead capture → CRM entry → assignment → follow-up email sequences — fully automated with zero manual intervention." },
                { title: "AI Agent Workflows", desc: "n8n AI agent pipelines for customer support, travel itinerary generation, and intelligent lead qualification." },
                { title: "Lead Routing & Scoring", desc: "Smart lead routing based on geography, budget, and enquiry type — auto-assigned to the right sales rep with instant notifications." },
                { title: "API & Webhook Integrations", desc: "Connect your CRM, email platform, booking system, WhatsApp Business API, and payment gateway with automated data flows." },
                { title: "Reporting & Alerting", desc: "Automated daily/weekly reports, performance dashboards, and real-time error alerting for business-critical workflows." },
              ].map((item) => (
                <div key={item.title} className="card rounded-2xl p-6">
                  <h3 className="font-semibold text-ink-100 mb-2">{item.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why n8n over Zapier/Make */}
          <section className="mb-12 card rounded-2xl p-8">
            <h2 className="text-xl font-bold text-ink-100 mb-4">Why n8n over Zapier or Make?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-ink-400">
              <ul className="space-y-2">
                <li>→ <strong className="text-ink-200">Self-hosted</strong> — your data never leaves your server</li>
                <li>→ <strong className="text-ink-200">No execution limits</strong> — scale without per-task pricing</li>
                <li>→ <strong className="text-ink-200">AI-native</strong> — built-in LLM nodes and AI agent support</li>
              </ul>
              <ul className="space-y-2">
                <li>→ <strong className="text-ink-200">GDPR-friendly</strong> — ideal for UK and EU data compliance</li>
                <li>→ <strong className="text-ink-200">Custom code nodes</strong> — no black-box limitations</li>
                <li>→ <strong className="text-ink-200">Cost-effective</strong> — one VPS vs. per-task SaaS pricing</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-ink-400 mb-6">
              Ready to eliminate manual work? Let&apos;s build your automation backbone.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "var(--accent-primary)", color: "#fff" }}
            >
              Start Your Automation Project
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
