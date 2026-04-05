"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const ACHIEVEMENTS = [
  { value: "80+",   label: "Projects delivered",   color: "var(--violet)" },
  { value: "100%",  label: "Client satisfaction",  color: "var(--pink)"   },
  { value: "99.9%", label: "Uptime delivered",      color: "var(--cyan)"   },
  { value: "10+",   label: "Years experience",      color: "var(--green)"  },
];

const AVATAR_COLORS = [
  "linear-gradient(135deg, var(--violet), var(--pink))",
  "linear-gradient(135deg, var(--cyan), var(--violet))",
  "linear-gradient(135deg, var(--pink), var(--amber))",
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const nav = useCallback((d: number) => {
    setDir(d);
    setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => nav(1), 6000);
    return () => clearInterval(t);
  }, [nav]);

  const t = TESTIMONIALS[idx];

  return (
    <section
      id="testimonials"
      className="relative section-padding"
      style={{ background: "var(--bg)" }}
      aria-labelledby="testimonials-heading"
    >
      {/* Glow */}
      <div
        className="glow-blob w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--violet), transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">

        {/* Section label */}
        <motion.p
          className="label-mono text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.p>

        {/* THE QUOTE — large, editorial style */}
        <div className="mb-16">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Opening quote mark — decorative */}
              <div
                className="text-5xl sm:text-7xl font-black leading-none select-none mb-4"
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  background: "linear-gradient(135deg, var(--violet), var(--pink))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.5,
                }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Large quote text */}
              <blockquote
                className="text-xl sm:text-2xl lg:text-3xl leading-snug font-medium text-balance"
                style={{
                  color: "var(--text-1)",
                  fontStyle: "italic",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {t.content}
              </blockquote>

              {/* Author info */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: AVATAR_COLORS[idx % AVATAR_COLORS.length],
                    boxShadow: "0 4px 20px rgba(139,92,246,0.3)",
                  }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-1)" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{t.role}</p>
                  <p className="text-xs" style={{ color: "var(--violet)" }}>{t.company}</p>
                </div>

                {/* Stars */}
                <div
                  className="ml-auto flex items-center gap-1"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={i < t.rating ? "var(--amber)" : "none"}
                      stroke={i < t.rating ? "var(--amber)" : "var(--text-3)"}
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => nav(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-3)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-1)";
                e.currentTarget.style.borderColor = "var(--border-lit)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-3)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>

            <div className="flex gap-2" role="tablist">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Testimonial ${i + 1}`}
                >
                  <motion.div
                    className="h-1.5 rounded-full"
                    style={{ background: i === idx ? "var(--violet)" : "var(--text-3)" }}
                    animate={{ width: i === idx ? 28 : 8, opacity: i === idx ? 1 : 0.3 }}
                    transition={{ duration: 0.25 }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => nav(1)}
              className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-3)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-1)";
                e.currentTarget.style.borderColor = "var(--border-lit)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-3)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Stats row below */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-center py-4"
            >
              <p
                className="font-black"
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: a.color,
                }}
              >
                {a.value}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
