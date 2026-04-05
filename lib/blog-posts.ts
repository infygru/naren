export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gdpr-travel-booking-nextjs",
    title: "Building a GDPR-Compliant Travel Booking System with Next.js",
    excerpt:
      "A practical guide to architecting travel booking platforms that satisfy UK GDPR, cookie consent (ICO), and WCAG AA accessibility — without sacrificing performance or conversion.",
    date: "2025-03-18",
    readingTime: "9 min read",
    tags: ["GDPR", "Next.js", "Travel Tech", "UK Compliance", "Architecture"],
    category: "Travel Tech",
  },
  {
    slug: "n8n-vs-zapier-travel-agencies",
    title: "n8n vs Zapier for Travel Agencies: Why Self-hosted Wins in 2025",
    excerpt:
      "After 3,915+ production executions at 0% failure rate, here's why self-hosted n8n beats Zapier and Make for travel agency automation — from booking confirmations to CRM lead routing.",
    date: "2025-02-24",
    readingTime: "7 min read",
    tags: ["n8n", "Automation", "Travel Tech", "Zapier", "Self-hosted"],
    category: "Automation",
  },
  {
    slug: "self-hosted-coolify-travel-tech",
    title: "Self-hosted Coolify on KVM VPS: The UK Travel Startup Infrastructure Guide",
    excerpt:
      "How to replace Vercel with a self-hosted Coolify stack — achieving sub-30% CPU load, 99.9% uptime, and GDPR-friendly data residency for travel platforms serving UK and EU customers.",
    date: "2025-01-30",
    readingTime: "8 min read",
    tags: ["Coolify", "KVM VPS", "Self-hosted", "Infrastructure", "GDPR"],
    category: "Infrastructure",
  },
  {
    slug: "nextjs-architecture-travel-brands",
    title: "How I Architect Next.js Platforms for UK, UAE & India Travel Brands",
    excerpt:
      "10 years of lessons from building travel platforms that score 99+ on PageSpeed, rank #1 on Google, and convert international visitors into bookings — covering ISR strategy, CMS choices, and multi-currency patterns.",
    date: "2025-01-10",
    readingTime: "11 min read",
    tags: ["Next.js", "Architecture", "Travel Tech", "SEO", "Performance"],
    category: "Architecture",
  },
];
