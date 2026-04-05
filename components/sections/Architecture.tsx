"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, Box, Database, Zap, Cloud } from "lucide-react";
import { ARCH_PILLARS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS: Record<string, React.ElementType> = { Layers, GitBranch, Box, Database, Zap, Cloud };

const STACK_LAYERS = [
  {
    label:   "Edge / CDN",
    sub:     "Cloudflare · Custom domains · SSL · DDoS protection",
    accent:  "var(--cyan)",
    dim:     "var(--cyan-dim)",
    bd:      "var(--cyan-bd)",
    side:    "Internet-facing layer",
  },
  {
    label:   "Frontend",
    sub:     "Next.js App Router · ISR · SSR · TailwindCSS",
    accent:  "var(--violet)",
    dim:     "var(--violet-dim)",
    bd:      "var(--violet-bd)",
    side:    "UI & rendering",
  },
  {
    label:   "Automation",
    sub:     "n8n Workflows · Webhooks · CRM sync · Lead routing",
    accent:  "var(--amber)",
    dim:     "var(--amber-dim)",
    bd:      "var(--amber-bd)",
    side:    "Business logic",
  },
  {
    label:   "Backend / CMS",
    sub:     "Node.js · WordPress · REST APIs · GraphQL",
    accent:  "var(--pink)",
    dim:     "var(--pink-dim)",
    bd:      "var(--pink-bd)",
    side:    "Data & services",
  },
  {
    label:   "Infrastructure",
    sub:     "Coolify · KVM VPS · Ubuntu 22/24.04 · Nginx",
    accent:  "var(--green)",
    dim:     "var(--green-dim)",
    bd:      "var(--green-bd)",
    side:    "Metal & OS",
  },
];

const PRINCIPLES = [
  { title: "Performance obsessed", desc: "99+ PageSpeed in production. 0.4s FCP is the plan, not the accident.", dot: "var(--violet)" },
  { title: "Self-hosted first",    desc: "KVM VPS + Coolify — full control, sub-30% CPU, zero vendor lock-in.",   dot: "var(--cyan)"   },
  { title: "Automate everything",  desc: "3,915 executions. 0% failure. If it runs twice, it runs automatically.", dot: "var(--amber)"  },
  { title: "Compliance-aware",     desc: "UK healthcare, GDPR, recruitment law — built to pass audits.",           dot: "var(--green)"  },
];

const PILLAR_ACCENTS = [
  { color: "var(--violet)", dim: "var(--violet-dim)", bd: "var(--violet-bd)" },
  { color: "var(--amber)",  dim: "var(--amber-dim)",  bd: "var(--amber-bd)"  },
  { color: "var(--pink)",   dim: "var(--pink-dim)",   bd: "var(--pink-bd)"   },
  { color: "var(--cyan)",   dim: "var(--cyan-dim)",   bd: "var(--cyan-bd)"   },
  { color: "var(--green)",  dim: "var(--green-dim)",  bd: "var(--green-bd)"  },
  { color: "var(--violet)", dim: "var(--violet-dim)", bd: "var(--violet-bd)" },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative section-padding"
      style={{ background: "var(--bg-2)" }}
      aria-labelledby="architecture-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-wide space-y-12 sm:space-y-20">
        <SectionHeader
          label="Architecture"
          title="How I Think About "
          highlight="Systems"
          description="A deliberate layered approach — from edge CDN through frontend, automation, backend, down to bare metal."
          className="mb-0"
        />

        {/* Stack diagram — full width rows */}
        <div>
          <p className="label-mono mb-8 text-center">Production stack</p>
          <div className="space-y-0 max-w-3xl mx-auto">
            {STACK_LAYERS.map((layer, i) => (
              <div key={layer.label}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className="flex items-stretch group"
                >
                  {/* Left label — hidden on mobile */}
                  <div
                    className="hidden sm:flex w-36 sm:w-48 flex-shrink-0 items-center justify-end pr-5 py-4"
                    style={{ borderRight: `2px solid ${layer.accent}` }}
                  >
                    <div className="text-right">
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--text-3)", fontFamily: "var(--font-jetbrains), monospace" }}
                      >
                        {layer.side}
                      </p>
                    </div>
                  </div>

                  {/* Connector dot — hidden on mobile */}
                  <div
                    className="hidden sm:flex flex-shrink-0 items-center"
                    style={{ margin: "0 -5px", zIndex: 1 }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: layer.accent,
                        boxShadow: `0 0 8px ${layer.accent}`,
                        border: "2px solid var(--bg-2)",
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Right — content row (full-width on mobile) */}
                  <div
                    className="flex-1 sm:ml-5 py-3 sm:py-4 px-4 sm:px-5 rounded-xl transition-all duration-200"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderLeft: `3px solid ${layer.accent}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = layer.bd;
                      e.currentTarget.style.background = layer.dim;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "var(--bg-card)";
                    }}
                  >
                    {/* Mobile-only: side label */}
                    <p
                      className="sm:hidden text-[10px] mb-1"
                      style={{ color: "var(--text-3)", fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      {layer.side}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "var(--text-1)" }}>
                          {layer.label}
                        </p>
                        <p
                          className="text-xs mt-0.5 leading-snug"
                          style={{ color: "var(--text-3)", fontFamily: "var(--font-jetbrains), monospace" }}
                        >
                          {layer.sub}
                        </p>
                      </div>
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0 ml-4"
                        style={{ background: layer.accent, boxShadow: `0 0 6px ${layer.accent}` }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Connecting line between rows — desktop only */}
                {i < STACK_LAYERS.length - 1 && (
                  <div
                    className="hidden sm:block sm:ml-[calc(12rem+1px)] h-4 w-px"
                    style={{ background: `linear-gradient(180deg, ${layer.accent}, ${STACK_LAYERS[i + 1].accent})`, opacity: 0.4 }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Design principles */}
        <div>
          <p className="label-mono mb-8 text-center">Design principles</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 rounded-2xl space-y-3"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: p.dot, boxShadow: `0 0 6px ${p.dot}` }}
                    aria-hidden="true"
                  />
                  <h4 className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>{p.title}</h4>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Building blocks — horizontal scroll */}
        <div>
          <p className="label-mono mb-8 text-center">Building blocks</p>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {ARCH_PILLARS.map((pillar, i) => {
              const Icon = ICONS[pillar.icon] || Box;
              const acc = PILLAR_ACCENTS[i % PILLAR_ACCENTS.length];
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="flex-shrink-0 w-44 p-4 rounded-2xl space-y-3"
                  style={{
                    background: "var(--bg-card)",
                    border: `1px solid var(--border)`,
                    borderTop: `3px solid ${acc.color}`,
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-lg"
                    style={{ background: acc.dim }}
                  >
                    <Icon className="w-4 h-4" style={{ color: acc.color }} aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold" style={{ color: "var(--text-1)" }}>{pillar.title}</p>
                  <ul className="space-y-1">
                    {pillar.items.map((item, j) => (
                      <li
                        key={`${j}-${item}`}
                        className="text-[11px]"
                        style={{ color: "var(--text-3)", fontFamily: "var(--font-jetbrains), monospace" }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
