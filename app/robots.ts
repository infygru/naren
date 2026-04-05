import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Main crawlers — full access to all content
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot"],
        allow: ["/", "/blog/", "/services/"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        // All other bots — same rules, crawl-delay to protect server
        userAgent: "*",
        allow: ["/", "/blog/", "/services/"],
        disallow: ["/api/", "/_next/", "/admin/"],
        crawlDelay: 10,
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
