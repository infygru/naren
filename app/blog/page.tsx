import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Travel Tech, n8n Automation & Next.js Architecture",
  description:
    "Technical articles on Next.js travel booking systems, n8n automation workflows, GDPR-compliant development, self-hosted infrastructure, and solutions architecture — by " +
    SITE_CONFIG.name,
  keywords: [
    "Next.js travel booking blog", "n8n automation workflows guide",
    "GDPR web development articles", "self-hosted infrastructure Coolify guide",
    "solutions architect blog travel tech", "travel tech development articles UK",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: {
    title: `Blog — Travel Tech, n8n & Architecture | ${SITE_CONFIG.name}`,
    description:
      "Deep dives on Next.js travel platforms, n8n workflow automation, GDPR compliance, and self-hosted infrastructure by Narendran C — Lead Solutions Architect.",
    url: `${SITE_CONFIG.url}/blog`,
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Travel Tech": "rgba(139,92,246,0.12)",
  "Automation":  "rgba(234,179,8,0.12)",
  "Infrastructure": "rgba(6,182,212,0.12)",
  "Architecture": "rgba(59,130,246,0.12)",
};
const CATEGORY_TEXT: Record<string, string> = {
  "Travel Tech":    "var(--violet)",
  "Automation":     "#eab308",
  "Infrastructure": "#06b6d4",
  "Architecture":   "#3b82f6",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14">
          <span className="label-text">Writing</span>
          <h1 className="section-title mt-2">
            Technical <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-ink-500 mt-3 max-w-xl">
            Deep dives on travel tech architecture, n8n automation, GDPR-compliant development,
            and self-hosted infrastructure — from 10+ years building platforms for UK, UAE &amp; India.
          </p>
        </div>

        <div className="space-y-5">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block card rounded-2xl p-7 transition-all"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: CATEGORY_COLORS[post.category] ?? "rgba(255,255,255,0.06)",
                        color: CATEGORY_TEXT[post.category] ?? "var(--text-2)",
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-3)" }}>
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-3)" }}>
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2
                    className="font-bold text-lg leading-snug mb-2 transition-colors"
                    style={{ color: "var(--text-1)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-3)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{ background: "var(--bg)", color: "var(--text-3)", border: "1px solid var(--border)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--text-3)" }}
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
