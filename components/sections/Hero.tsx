"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Twitter, MapPin, Zap, Server, Code2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const STATS = [
  { value: "10+",   sub: "Years exp",       color: "var(--violet)" },
  { value: "3,915", sub: "n8n Executions",  color: "var(--pink)"   },
  { value: "99",    sub: "PageSpeed",       color: "var(--cyan)"   },
  { value: "0%",    sub: "Failure Rate",    color: "var(--green)"  },
];

const SERVICES = [
  { Icon: Code2,  label: "Next.js Platforms",  color: "var(--violet)" },
  { Icon: Zap,    label: "n8n Automation",      color: "var(--amber)"  },
  { Icon: Server, label: "Self-hosted Infra",   color: "var(--cyan)"   },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } },
};

export default function Hero() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
      aria-label="Introduction"
    >
      {/* Background glow blobs */}
      <div
        className="glow-blob w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] opacity-20"
        style={{ background: "radial-gradient(circle, var(--violet), transparent 65%)", top: "-80px", left: "-80px" }}
        aria-hidden="true"
      />
      <div
        className="glow-blob w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] opacity-15"
        style={{ background: "radial-gradient(circle, var(--pink), transparent 65%)", bottom: "-40px", right: "-40px" }}
        aria-hidden="true"
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            className="space-y-7"
          >
            {/* Availability badge */}
            <motion.div variants={item}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium"
                style={{
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.25)",
                  color: "var(--green)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--green)" }} aria-hidden="true" />
                Available for hire · Chennai, India
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item}>
              <h1
                className="display-text"
                style={{ fontSize: "clamp(2rem, 11vw, 5.2rem)", color: "var(--text-1)", lineHeight: 0.9 }}
              >
                NARENDRAN
              </h1>
              <h1
                className="display-text gradient-text"
                style={{ fontSize: "clamp(2rem, 11vw, 5.2rem)", lineHeight: 0.9 }}
              >
                C.
              </h1>
            </motion.div>

            {/* Rule */}
            <motion.div
              variants={item}
              className="h-px w-48"
              style={{ background: "linear-gradient(90deg, var(--violet), transparent)" }}
              aria-hidden="true"
            />

            {/* Role */}
            <motion.p
              variants={item}
              className="text-base sm:text-xl font-semibold"
              style={{ color: "var(--text-2)", letterSpacing: "-0.02em" }}
            >
              Lead Solutions Architect
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={item}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "var(--text-3)" }}
            >
              Next.js platforms scoring 99 on PageSpeed. n8n automations
              with 0% failure rates. Self-hosted infrastructure for
              international brands.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                See my work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="btn-ghost">
                Hire me
              </a>
              <a
                href="/Narendran_Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: "var(--text-3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                Resume
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center gap-2">
              {[
                { Icon: Github,   href: SITE_CONFIG.github,   label: "GitHub" },
                { Icon: Linkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
                { Icon: Twitter,  href: SITE_CONFIG.twitter,  label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl transition-all"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--violet)";
                    e.currentTarget.style.borderColor = "var(--border-lit)";
                    e.currentTarget.style.background = "var(--violet-dim)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-3)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--bg-card)";
                  }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile card ── */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 48 }}
            animate={started ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="relative">

              {/* Main card */}
              <div
                className="rounded-3xl p-6 space-y-5"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px var(--border)",
                }}
              >
                {/* Avatar + identity */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--violet), var(--pink))",
                      boxShadow: "0 8px 20px rgba(157,127,244,0.4)",
                      fontFamily: "var(--font-bricolage), sans-serif",
                    }}
                    aria-hidden="true"
                  >
                    NC
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate" style={{ color: "var(--text-1)", fontFamily: "var(--font-bricolage), sans-serif" }}>
                      Narendran C
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--violet)" }}>
                      Lead Solutions Architect
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "var(--text-3)" }} aria-hidden="true" />
                      <span className="text-[11px]" style={{ color: "var(--text-3)" }}>Chennai, India</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green)" }} aria-hidden="true" />
                    <span className="text-xs font-medium" style={{ color: "var(--green)" }}>Open</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px" style={{ background: "var(--border)" }} aria-hidden="true" />

                {/* Stats 2×2 */}
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((s) => (
                    <div
                      key={s.sub}
                      className="p-4 rounded-2xl"
                      style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                    >
                      <p
                        className="text-2xl font-black leading-none"
                        style={{ color: s.color, fontFamily: "var(--font-bricolage), sans-serif" }}
                      >
                        {s.value}
                      </p>
                      <p className="text-[11px] mt-1.5 leading-tight" style={{ color: "var(--text-3)" }}>
                        {s.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div className="space-y-2">
                  {SERVICES.map(({ Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl"
                      style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}
                      >
                        <Icon className="w-3.5 h-3.5" style={{ color }} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-medium" style={{ color: "var(--text-2)" }}>{label}</span>
                      <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                className="absolute -top-4 -right-4 px-3.5 py-2.5 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--cyan-bd)",
                  boxShadow: "0 8px 24px rgba(34,211,238,0.15)",
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <p className="text-[10px] font-mono uppercase tracking-wide" style={{ color: "var(--text-3)" }}>PageSpeed</p>
                <p className="text-lg font-black leading-none mt-0.5" style={{ color: "var(--cyan)", fontFamily: "var(--font-bricolage)" }}>
                  99 / 100
                </p>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-3.5 py-2.5 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--green-bd)",
                  boxShadow: "0 8px 24px rgba(74,222,128,0.15)",
                }}
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                aria-hidden="true"
              >
                <p className="text-[10px] font-mono uppercase tracking-wide" style={{ color: "var(--text-3)" }}>Failure Rate</p>
                <p className="text-lg font-black leading-none mt-0.5" style={{ color: "var(--green)", fontFamily: "var(--font-bricolage)" }}>
                  0%
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: started ? 1 : 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span
          className="text-[10px] tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-3)" }}
        >
          scroll
        </span>
        <motion.div
          className="w-px h-8 rounded-full"
          style={{ background: "linear-gradient(180deg, var(--violet), transparent)" }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
