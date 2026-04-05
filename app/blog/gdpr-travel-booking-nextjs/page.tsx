import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_CONFIG } from "@/lib/constants";

const post = BLOG_POSTS.find((p) => p.slug === "gdpr-travel-booking-nextjs")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "GDPR compliant travel booking system Next.js", "build GDPR travel website UK",
    "Next.js travel booking GDPR", "UK GDPR web development guide",
    "WCAG AA travel website", "cookie consent travel booking UK",
    "ICO compliant website developer", "GDPR travel platform architect",
    "healthcare travel GDPR Next.js", "compliant booking system developer UK",
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

export default function GdprTravelBookingPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogPostLayout post={post}>

        <Section heading="Why GDPR Compliance Is Non-Negotiable for UK Travel Platforms">
          <P>
            If you&apos;re building a travel booking system for UK customers, GDPR compliance is not a legal
            checkbox — it is a commercial requirement. The ICO (Information Commissioner&apos;s Office) actively
            investigates travel and hospitality companies. Fines are real: British Airways was fined £20m,
            Marriott £18.4m. Your platform handles names, passport details, payment data, and travel
            itineraries — all of which fall squarely under GDPR&apos;s scope.
          </P>
          <P>
            The good news: with the right architectural decisions made upfront, a Next.js travel booking
            system can be fully GDPR-compliant <em>and</em> score 99+ on Google PageSpeed. Compliance does
            not mean slow.
          </P>
        </Section>

        <Section heading="Architecture Decisions That Determine GDPR Risk">
          <H3>1. Data Minimisation at the API Layer</H3>
          <P>
            The single most impactful GDPR decision is what data you collect. Every form field, every API
            call, every analytics event that captures personal data is a liability if it is not necessary.
            In Next.js, this means designing your API routes to collect only what your specific business
            process requires — not what is convenient or &quot;might be useful later&quot;.
          </P>
          <P>
            For a travel booking system, you typically need: name, email, phone, travel dates, and payment
            reference. You do not need: IP geolocation stored in your database, full browser fingerprints,
            or a user&apos;s entire search history unless you can justify a lawful basis for each.
          </P>

          <H3>2. Server-side Rendering vs. Client-side Tracking</H3>
          <P>
            Next.js&apos;s App Router gives you a genuine architectural choice: move analytics and third-party
            scripts server-side wherever possible. Sending event data from your server to your analytics
            provider — rather than loading Google Tag Manager in the browser — eliminates an entire class
            of cookie consent requirements.
          </P>
          <P>
            For travel platforms I&apos;ve built in the UK, this typically means: server-side Google Analytics
            4 via Measurement Protocol, no third-party pixels without explicit consent, and a
            consent-gated approach to Meta/LinkedIn retargeting.
          </P>

          <H3>3. Cookie Consent Implementation (ICO Standard)</H3>
          <P>
            The ICO&apos;s standard for cookie consent is stricter than a simple banner. It requires:
          </P>
          <ul className="blog-list">
            <li>Consent must be freely given, specific, informed, and unambiguous</li>
            <li>Rejecting all non-essential cookies must be as easy as accepting them</li>
            <li>Pre-ticked boxes are not valid consent</li>
            <li>Consent must be re-solicited if your cookie use changes materially</li>
          </ul>
          <P>
            In Next.js, I implement this using a custom consent context that gates third-party script loading.
            The key pattern: use Next.js&apos;s <code>Script</code> component with <code>strategy=&quot;lazyOnload&quot;</code>{" "}
            conditionally rendered only after the user grants consent — never on initial page load.
          </P>
        </Section>

        <Section heading="Self-hosted Infrastructure: GDPR&apos;s Quiet Advantage">
          <P>
            One underappreciated aspect of GDPR compliance for UK travel platforms is data residency. When
            you deploy on Vercel or Netlify, your edge functions may process data in data centres outside
            the UK/EU — technically requiring Standard Contractual Clauses or equivalent safeguards.
          </P>
          <P>
            Self-hosted KVM VPS on a UK or EU data centre (I use Hetzner Frankfurt or OVH UK) sidesteps
            this entirely. Your data never leaves the jurisdiction. For healthcare-adjacent travel (medical
            tourism, accessible travel) where Article 9 special category data may be involved, this is not
            just convenient — it is architecturally sound.
          </P>
          <P>
            Combined with Coolify for deployment management, you get the developer experience of a PaaS
            (one-click deploys, automatic SSL, domain routing) with the compliance properties of
            self-hosted infrastructure.{" "}
            <Link href="/services/self-hosted-infrastructure" className="blog-link">
              Learn more about my self-hosted infrastructure stack.
            </Link>
          </P>
        </Section>

        <Section heading="WCAG AA Accessibility: The Compliance Requirement Most Developers Miss">
          <P>
            The Equality Act 2010 requires UK businesses to make reasonable adjustments for disabled users —
            which the courts have interpreted as including website accessibility. For travel booking systems
            specifically, the failure to provide an accessible booking flow can constitute unlawful
            discrimination.
          </P>
          <P>
            WCAG 2.1 AA compliance in a Next.js travel booking system means:
          </P>
          <ul className="blog-list">
            <li>Semantic HTML: <code>&lt;button&gt;</code> for actions, <code>&lt;a&gt;</code> for navigation, proper heading hierarchy</li>
            <li>Colour contrast: minimum 4.5:1 for normal text, 3:1 for large text and UI components</li>
            <li>Keyboard navigation: every interactive element reachable and operable without a mouse</li>
            <li>Focus management: visible focus indicators, logical focus order through booking steps</li>
            <li>Screen reader support: ARIA labels on icon buttons, live regions for dynamic price updates</li>
          </ul>
        </Section>

        <Section heading="The Booking Data Flow: Where GDPR Risk Concentrates">
          <P>
            In a travel booking system, the highest-risk data flow is the transition from search to payment.
            This is where personal data (name, DOB, passport), financial data (card details), and travel
            data (destination, dates) converge. Your architecture must address:
          </P>
          <ul className="blog-list">
            <li><strong>Payment data:</strong> Never store raw card numbers — integrate Stripe or a PCI-DSS Level 1 provider and store only the payment reference token</li>
            <li><strong>Passport/travel document data:</strong> Encrypt at rest using AES-256, restrict access by role, log every access attempt</li>
            <li><strong>Booking confirmation emails:</strong> Minimise personal data in email content — use booking reference numbers rather than full itineraries where possible</li>
            <li><strong>Third-party GDS APIs:</strong> Review data processing agreements with Amadeus, Sabre, or your bed bank — they are data processors under GDPR and your privacy policy must reflect this</li>
          </ul>
        </Section>

        <Section heading="Practical Checklist: GDPR-Ready Next.js Travel Platform">
          <ul className="blog-list">
            <li>✓ Cookie consent banner meeting ICO standard — no pre-ticked boxes, easy reject path</li>
            <li>✓ Privacy policy accurately reflecting all third-party data processors (GDS, analytics, CRM)</li>
            <li>✓ Data retention policy enforced programmatically — automated deletion of inactive booking data after defined period</li>
            <li>✓ Right-to-erasure endpoint — admin UI + API for handling Subject Access Requests</li>
            <li>✓ Self-hosted or EU/UK-jurisdiction infrastructure for data residency</li>
            <li>✓ HTTPS everywhere — Let&apos;s Encrypt SSL with auto-renewal</li>
            <li>✓ Secure API routes — rate limiting, input validation (Zod), no PII in URL parameters or server logs</li>
            <li>✓ WCAG 2.1 AA audit completed and documented</li>
          </ul>
        </Section>

        <Callout>
          Building a GDPR-compliant travel booking system for UK customers?{" "}
          <Link href="/services/gdpr-web-development" className="blog-link">
            See how I approach GDPR-compliant web development
          </Link>{" "}
          or{" "}
          <Link href="/#contact" className="blog-link">get in touch directly</Link>.
        </Callout>

      </BlogPostLayout>
    </>
  );
}

// ─── Prose helpers ──────────────────────────────────────────────────────────
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
