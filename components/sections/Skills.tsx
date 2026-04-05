"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Cloud, Zap, Users } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS: Record<string, React.ElementType> = { Monitor, Server, Cloud, Zap, Users };

const CAT_ACCENT: Record<string, { color: string; dim: string; bd: string }> = {
  Frontend:   { color: "var(--violet)", dim: "var(--violet-dim)", bd: "var(--violet-bd)" },
  Backend:    { color: "var(--cyan)",   dim: "var(--cyan-dim)",   bd: "var(--cyan-bd)"   },
  Automation: { color: "var(--amber)",  dim: "var(--amber-dim)",  bd: "var(--amber-bd)"  },
  DevOps:     { color: "var(--pink)",   dim: "var(--pink-dim)",   bd: "var(--pink-bd)"   },
  Design:     { color: "var(--green)",  dim: "var(--green-dim)",  bd: "var(--green-bd)"  },
};

function levelLabel(n: number) {
  if (n >= 95) return "Expert";
  if (n >= 85) return "Advanced";
  if (n >= 70) return "Proficient";
  return "Familiar";
}

function levelColor(n: number, accent: string) {
  if (n >= 95) return accent;
  if (n >= 85) return accent;
  return "var(--text-3)";
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const cat = SKILL_CATEGORIES[active];
  const acc = CAT_ACCENT[cat.title] ?? CAT_ACCENT.Frontend;

  const ALL_TECH = [
    "Next.js","React.js","TailwindCSS","Node.js","JavaScript",
    "n8n","Coolify","KVM VPS","Ubuntu","Nginx",
    "WordPress","Webflow","Figma","Adobe XD","GraphQL",
    "REST APIs","HTML & CSS","Git","SEO","Cloudflare",
  ];

  return (
    <section
      id="skills"
      className="relative section-padding"
      style={{ background: "var(--bg)" }}
      aria-labelledby="skills-heading"
    >
      <div className="container-wide">
        <SectionHeader
          label="Expertise"
          title="Where I "
          highlight="Specialize"
          description="A decade of hands-on mastery across the full technology stack — frontend to infrastructure."
          className="mb-10 sm:mb-14"
        />

        {/* Horizontal category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Skill categories">
          {SKILL_CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon] || Monitor;
            const ca = CAT_ACCENT[c.title] ?? CAT_ACCENT.Frontend;
            const isActive = i === active;
            return (
              <motion.button
                key={c.title}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={isActive}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={isActive ? {
                  background: ca.dim,
                  border: `1px solid ${ca.bd}`,
                  color: ca.color,
                } : {
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-3)",
                }}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                {c.title}
                {isActive && (
                  <span className="text-xs font-mono opacity-60">{c.skills.length}</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-4 sm:p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between mb-5 sm:mb-8">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = ICONS[cat.icon] || Monitor;
                  return (
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-xl"
                      style={{ background: acc.dim, border: `1px solid ${acc.bd}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: acc.color }} aria-hidden="true" />
                    </div>
                  );
                })()}
                <div>
                  <h3 className="font-bold text-base" style={{ color: "var(--text-1)" }}>{cat.title}</h3>
                  <p className="text-xs" style={{ color: "var(--text-3)" }}>{cat.skills.length} skills</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className="text-3xl font-black font-mono"
                  style={{ color: acc.color }}
                >
                  {Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%
                </p>
                <p className="text-xs" style={{ color: "var(--text-3)" }}>avg. proficiency</p>
              </div>
            </div>

            {/* Skills as pill grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl group"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = acc.bd;
                    e.currentTarget.style.background = acc.dim;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--bg-elevated)";
                  }}
                >
                  <span className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: acc.color }}
                    >
                      {skill.level}%
                    </span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                      style={{
                        background: acc.dim,
                        color: acc.color,
                        border: `1px solid ${acc.bd}`,
                      }}
                    >
                      {levelLabel(skill.level)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 space-y-5"
        >
          <p className="label-mono text-center">Technologies I use daily</p>
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_TECH.map((t, i) => (
              <motion.span
                key={`${i}-${t}`}
                className="skill-pill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
