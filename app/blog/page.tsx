import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on Next.js, system architecture, DevOps, and workflow automation by " +
    SITE_CONFIG.name,
  openGraph: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description:
      "Technical articles on Next.js, system architecture, and modern web development.",
    url: `${SITE_CONFIG.url}/blog`,
  },
};

/**
 * Blog index page — ready for MDX or CMS integration.
 * Add your posts by importing from a CMS (Contentlayer, Sanity, etc.)
 */
export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="label-text">Writing</span>
          <h1 className="section-title mt-2">
            Technical <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-ink-500 mt-3">
            Deep dives on architecture, performance, and modern engineering
            patterns.
          </p>
        </div>

        {/* Blog posts will be rendered here */}
        <div className="flex items-center justify-center h-64 card rounded-2xl">
          <p className="text-ink-600 text-sm">
            Blog posts coming soon — this page is ready for MDX content.
          </p>
        </div>
      </div>
    </main>
  );
}
