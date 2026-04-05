"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const SOCIALS = [
  { icon: Github,   label: "GitHub",   href: SITE_CONFIG.github },
  { icon: Linkedin, label: "LinkedIn", href: SITE_CONFIG.linkedin },
  { icon: Twitter,  label: "Twitter",  href: SITE_CONFIG.twitter },
  { icon: Mail,     label: "Email",    href: `mailto:${SITE_CONFIG.email}` },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-2">
              <span
                className="text-2xl font-black"
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  background: "linear-gradient(135deg, var(--violet), var(--pink))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                N·
              </span>
              <span
                className="font-semibold text-sm"
                style={{ color: "var(--text-2)" }}
              >
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-3)" }}>
              Lead Solutions Architect & IT Operations.
              <br />Chennai, India.
            </p>
            <div className="flex items-center gap-1.5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-3)",
                  }}
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-1)";
                    e.currentTarget.style.borderColor = "var(--border-lit)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-3)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex gap-12 sm:gap-16">
            <div>
              <p className="label-mono mb-4">Navigate</p>
              <ul className="space-y-2.5" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm flex items-center gap-1 group transition-colors"
                      style={{ color: "var(--text-3)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label-mono mb-4">Contact</p>
              <div className="space-y-2.5">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm block transition-colors"
                  style={{ color: "var(--text-3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--violet)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
                >
                  {SITE_CONFIG.email}
                </a>
                <p className="text-xs" style={{ color: "var(--text-3)" }}>{SITE_CONFIG.location}</p>
                {SITE_CONFIG.availableForWork && (
                  <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--green)" }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--green)" }} aria-hidden="true" />
                    Available for work
                  </span>
                )}
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-3)" }}>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-3)" }}>
            Next.js · TailwindCSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
