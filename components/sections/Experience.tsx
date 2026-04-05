"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const ACCENTS = [
  { color: "var(--violet)", dim: "var(--violet-dim)", bd: "var(--violet-bd)" },
  { color: "var(--cyan)",   dim: "var(--cyan-dim)",   bd: "var(--cyan-bd)"   },
  { color: "var(--pink)",   dim: "var(--pink-dim)",   bd: "var(--pink-bd)"   },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative section-padding"
      style={{ background: "var(--bg-2)" }}
      aria-labelledby="experience-heading"
    >
      {/* top edge line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--pink), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-wide">
        <SectionHeader
          label="Career"
          title="Where I've "
          highlight="Worked"
          description="From UI/UX designer to Lead Solutions Architect — a decade of shipping high-performance platforms for international brands."
          className="mb-10 sm:mb-20"
          align="left"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            className="hidden lg:block absolute left-[220px] top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, var(--violet), var(--cyan), transparent)" }}
            aria-hidden="true"
          />

          <div className="space-y-10 lg:space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const acc = ACCENTS[idx % ACCENTS.length];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="relative grid lg:grid-cols-[220px_1fr] gap-6 lg:gap-12"
                >
                  {/* ── LEFT: date + dot ── */}
                  <div className="lg:text-right space-y-2 pt-1">
                    {/* Timeline dot — desktop */}
                    <div
                      className="hidden lg:flex absolute left-[220px] top-1 -translate-x-1/2 w-4 h-4 rounded-full items-center justify-center"
                      style={{ background: "var(--bg-2)", border: `2px solid ${acc.color}`, boxShadow: `0 0 12px ${acc.color}` }}
                      aria-hidden="true"
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: acc.color }} />
                    </div>

                    <p
                      className="text-xs font-mono leading-relaxed"
                      style={{ color: "var(--text-3)" }}
                    >
                      {exp.period}
                    </p>
                    <span
                      className="inline-flex text-xs font-mono px-3 py-1 rounded-full"
                      style={{ background: acc.dim, border: `1px solid ${acc.bd}`, color: acc.color }}
                    >
                      {exp.duration}
                    </span>
                    {idx === 0 && (
                      <div>
                        <span className="tag-green">Current</span>
                      </div>
                    )}
                  </div>

                  {/* ── RIGHT: content card ── */}
                  <div
                    className="rounded-2xl p-6 lg:p-8 space-y-6"
                    style={{
                      background: "var(--bg-card)",
                      border: `1px solid var(--border)`,
                      borderLeft: `3px solid ${acc.color}`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-1">
                        {/* Company */}
                        <h3
                          className="font-black leading-tight"
                          style={{
                            fontFamily: "var(--font-bricolage), sans-serif",
                            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                            color: "var(--text-1)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {exp.company}
                        </h3>

                        {/* Role */}
                        <p className="text-sm font-semibold" style={{ color: acc.color }}>
                          {exp.role}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <MapPin className="w-3 h-3 flex-shrink-0" style={{ color: "var(--text-3)" }} aria-hidden="true" />
                          <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>{exp.location}</span>
                        </div>
                      </div>

                      {/* Type badge */}
                      <span
                        className="text-xs font-medium px-3 py-1.5 rounded-xl flex-shrink-0"
                        style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-3)" }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <p className="label-mono mb-4">Key achievements</p>
                      <div className="space-y-3">
                        {exp.achievements.map((a, i) => (
                          <div
                            key={`${i}-${a.slice(0, 20)}`}
                            className="flex items-start gap-3 p-3 rounded-xl"
                            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                          >
                            <div
                              className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: acc.dim, border: `1px solid ${acc.bd}` }}
                              aria-hidden="true"
                            >
                              <ArrowUpRight className="w-3 h-3" style={{ color: acc.color }} />
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{a}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((t, ti) => (
                        <span key={`${ti}-${t}`} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-sm"
          style={{ color: "var(--text-3)", fontFamily: "var(--font-jetbrains), monospace" }}
        >
          UI/UX designer &rarr; Lead Architect.{" "}
          <span style={{ color: "var(--violet)" }}>10 years. Chennai &rarr; International.</span>
        </motion.p>
      </div>
    </section>
  );
}
