import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

interface Props {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogPostLayout({ post, children }: Props) {
  return (
    <main className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: "var(--text-3)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="label-text text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "var(--violet)",
              }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="section-title text-3xl sm:text-4xl leading-tight mb-5">{post.title}</h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-3)" }}>{post.excerpt}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-3)" }}
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className="mb-10" style={{ borderTop: "1px solid var(--border)" }} />

        {/* Article body */}
        <article className="prose-custom">{children}</article>

        {/* Footer */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>Narendran C</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>
                Lead Solutions Architect — Travel Tech, n8n & Next.js | UK · UAE · India
              </p>
            </div>
            <Link
              href="/#contact"
              className="btn-primary text-xs px-5 py-2.5"
            >
              Work with me
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
