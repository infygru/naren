import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_CONFIG } from "@/lib/constants";

const post = BLOG_POSTS.find((p) => p.slug === "self-hosted-coolify-travel-tech")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "self-hosted Coolify KVM VPS travel tech", "Coolify Next.js deployment guide",
    "self-hosted Vercel alternative UK", "KVM VPS Ubuntu Coolify setup",
    "GDPR self-hosted infrastructure travel", "Coolify travel startup guide",
    "Nginx reverse proxy Coolify", "self-hosted PaaS Next.js deployment",
    "VPS deployment consultant UK travel", "sub 30 CPU load Coolify VPS",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [SITE_CONFIG.name],
    tags: post.tags,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { "@id": `${SITE_CONFIG.url}/#person` },
  publisher: { "@id": `${SITE_CONFIG.url}/#person` },
  url: `${SITE_CONFIG.url}/blog/${post.slug}`,
  keywords: post.tags.join(", "),
};

export default function CoolifyTravelTechPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogPostLayout post={post}>

        <Section heading="Why Travel Startups Are Moving Off Vercel">
          <P>
            Vercel is an excellent platform — its developer experience is unmatched, and for early-stage
            prototypes it is hard to beat. But as UK travel startups scale, the pricing model starts to
            hurt: bandwidth overages, team seat costs, function execution limits, and the uncomfortable
            fact that your customer data is processed on US infrastructure.
          </P>
          <P>
            Over the past four years, every travel platform I&apos;ve architected runs on self-hosted KVM VPS
            with Coolify. The outcomes: <strong>sub-30% average CPU load</strong>, under 50% memory
            usage, 99+ PageSpeed scores, and complete data sovereignty. Here is exactly how it works.
          </P>
        </Section>

        <Section heading="The Stack: KVM VPS + Ubuntu + Coolify">
          <H3>Choosing Your VPS Provider</H3>
          <P>
            For UK/EU GDPR compliance, I recommend either <strong>Hetzner (Falkenstein DE or Helsinki FI)</strong> or{" "}
            <strong>OVHcloud (Strasbourg FR or London UK)</strong>. Both offer KVM virtualisation
            (genuine hardware isolation, not shared CPU), predictable pricing, and data centre locations
            within the UK/EU jurisdiction.
          </P>
          <P>
            My standard spec for a travel platform running 3–5 Next.js apps + n8n + a staging environment:
            <strong> CX32</strong> (4 vCPU, 8GB RAM, 80GB SSD, Hetzner) at approximately £8/month.
            Compare this to Vercel Pro at £19/mo per seat, before bandwidth or function costs.
          </P>

          <H3>OS Hardening (Ubuntu 22.04/24.04)</H3>
          <P>
            Before Coolify, the server needs to be hardened:
          </P>
          <ul className="blog-list">
            <li>Create a non-root sudo user — never deploy as root</li>
            <li>SSH key authentication only — disable password login</li>
            <li>UFW firewall: allow 22 (SSH), 80 (HTTP), 443 (HTTPS), block everything else</li>
            <li>fail2ban: auto-ban IPs with repeated failed SSH attempts</li>
            <li>Unattended security upgrades enabled</li>
            <li>Swap file configured (2× RAM recommended for apps with memory spikes)</li>
          </ul>

          <H3>Installing Coolify</H3>
          <P>
            Coolify installs via a single curl command and sets up Docker, Traefik (reverse proxy), and
            its own management UI on port 8000. First-time setup takes approximately 10 minutes. After
            that, deploying a Next.js app is: connect your Git repository → select branch → add environment
            variables → deploy. Coolify handles Docker build, Traefik routing, and Let&apos;s Encrypt SSL
            automatically.
          </P>
        </Section>

        <Section heading="Nginx vs Traefik: The Coolify Reverse Proxy Decision">
          <P>
            Coolify ships with Traefik as its default reverse proxy, which handles automatic SSL and
            domain routing well for most use cases. For travel platforms with more complex routing needs
            — wildcard subdomains, custom caching rules, rate limiting — I add Nginx in front of Traefik.
          </P>
          <P>
            The Nginx layer handles:
          </P>
          <ul className="blog-list">
            <li>HTTP/2 push and compression (gzip + brotli) for faster asset delivery</li>
            <li>Cache-Control headers for static assets — reduces Coolify container load</li>
            <li>Rate limiting on booking API endpoints — prevents abuse of quote/availability APIs</li>
            <li>IP allowlisting for admin routes</li>
            <li>Custom error pages matching the site design</li>
          </ul>
          <P>
            With this configuration, my travel platforms consistently achieve sub-30% CPU utilisation
            even during peak traffic (UK school holiday periods, sale launches). The 0.4s FCP on
            MyPerfectTrips was achieved on this exact stack.
          </P>
        </Section>

        <Section heading="GDPR Data Residency: The Overlooked Advantage">
          <P>
            When you deploy on Vercel, Next.js functions execute at Vercel&apos;s edge locations — which
            include nodes in the US, Asia, and elsewhere. For travel platforms processing passenger data,
            this technically means personal data is processed outside the UK/EU, requiring additional
            GDPR safeguards (Standard Contractual Clauses with Vercel&apos;s data sub-processors).
          </P>
          <P>
            With a Hetzner Frankfurt VPS, all data processing happens in Germany (EU). With OVH UK,
            it stays in the UK. Your DPA (Data Processing Agreement) with your VPS provider is
            straightforward, and you do not need to track data flows through a multi-tenant edge network.
          </P>
          <P>
            For healthcare travel, accessible travel, or any sector handling sensitive passenger data,
            this is a meaningful simplification of your GDPR compliance posture.
          </P>
        </Section>

        <Section heading="Multi-App Architecture: Running Your Full Stack on One VPS">
          <P>
            The real power of the Coolify stack is running your entire travel business infrastructure
            on one or two VPS instances:
          </P>
          <ul className="blog-list">
            <li><strong>Main travel platform</strong> (Next.js, SSR + ISR)</li>
            <li><strong>Staging environment</strong> (same Next.js app, preview branch auto-deploys)</li>
            <li><strong>n8n automation instance</strong> (booking automations, CRM sync, WhatsApp)</li>
            <li><strong>WordPress CMS</strong> (blog content, landing pages — headless or standalone)</li>
            <li><strong>Uptime Kuma</strong> (self-hosted monitoring, status page)</li>
            <li><strong>Plausible Analytics</strong> (GDPR-compliant analytics, no cookies required)</li>
          </ul>
          <P>
            All of the above runs comfortably on the Hetzner CX32 (£8/mo) with headroom to spare.
            The equivalent on Vercel + Zapier + a hosted analytics provider would cost £80–150/month.
          </P>
        </Section>

        <Section heading="Server Monitoring and Alerting">
          <P>
            Self-hosted does not mean unmonitored. My standard monitoring stack for travel platforms:
          </P>
          <ul className="blog-list">
            <li><strong>Coolify built-in metrics</strong> — CPU, memory, disk per container</li>
            <li><strong>Uptime Kuma</strong> — HTTP uptime checks every 30 seconds, alert to Telegram/email on downtime</li>
            <li><strong>n8n health workflow</strong> — runs every 15 minutes, checks API endpoints and booking flows, alerts on anomalies</li>
          </ul>
          <P>
            The result: any issue is detected and alerted within 15 minutes — typically before any client
            notices. In three years of production operation, the platforms I manage have had zero
            unplanned downtime exceeding 30 minutes.
          </P>
        </Section>

        <Callout>
          Want to migrate your travel platform off Vercel to a self-hosted Coolify stack, or set up
          this infrastructure from scratch?{" "}
          <Link href="/services/self-hosted-infrastructure" className="blog-link">
            See my self-hosted infrastructure service
          </Link>{" "}
          or <Link href="/#contact" className="blog-link">discuss your requirements</Link>.
        </Callout>

      </BlogPostLayout>
    </>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-1)" }}>{heading}</h2>
      {children}
    </section>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold mb-2 mt-5" style={{ color: "var(--text-1)" }}>{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-3)" }}>{children}</p>;
}
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 mt-10 text-sm leading-relaxed"
      style={{
        background: "rgba(139,92,246,0.08)",
        border: "1px solid rgba(139,92,246,0.2)",
        color: "var(--text-2)",
      }}
    >
      {children}
    </div>
  );
}
