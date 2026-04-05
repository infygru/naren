"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight, Globe, Github } from "lucide-react";
import { PROJECTS, SITE_CONFIG } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

type Project = (typeof PROJECTS)[number];

// ─── Website screenshot via Microlink ─────────────────────────────────────
function ProjectScreenshot({ url, title }: { url: string; title: string }) {
  const [err, setErr] = useState(false);
  const src = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

  if (!err) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={`${title} screenshot`}
        className="w-full h-full object-cover object-top"
        onError={() => setErr(true)}
        loading="lazy"
      />
    );
  }
  return null;
}


const FEAT_GRADIENTS = [
  "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.2))",
  "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.2))",
];
const GRID_ACCENTS = [
  { color: "var(--violet)", dim: "var(--violet-dim)", bd: "var(--violet-bd)" },
  { color: "var(--cyan)",   dim: "var(--cyan-dim)",   bd: "var(--cyan-bd)"   },
  { color: "var(--pink)",   dim: "var(--pink-dim)",   bd: "var(--pink-bd)"   },
  { color: "var(--green)",  dim: "var(--green-dim)",  bd: "var(--green-bd)"  },
];

// ─── Featured card (full-width) ───────────────────────────────────────────
function FeaturedCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const grad = FEAT_GRADIENTS[index % FEAT_GRADIENTS.length];
  const acc  = GRID_ACCENTS[index % GRID_ACCENTS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer rounded-2xl overflow-hidden"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Open ${project.title} case study`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      whileHover={{ borderColor: acc.bd }}
    >
      {/* Screenshot header — browser mockup */}
      <div className="relative overflow-hidden" style={{ height: "220px", background: grad }}>
        {/* Browser chrome bar */}
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-2.5"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
          </div>
          <div
            className="flex-1 flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono mx-2"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
          >
            <Globe className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
            {project.domain}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded-full transition-all flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            Visit
          </a>
        </div>

        {/* Screenshot */}
        <div className="absolute inset-0 top-9 overflow-hidden">
          <ProjectScreenshot url={project.url} title={project.title} />
          {/* Fallback gradient shown behind screenshot */}
          <div className="absolute inset-0 -z-10" style={{ background: grad }} />
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 top-9"
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" }}
        >
          <div
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          >
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            View case study
          </div>
        </div>

        {/* Bottom tags */}
        <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2">
          <span className="tag">{project.category}</span>
          {project.featured && (
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)" }}
            >
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 grid sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold" style={{ color: "var(--text-1)", fontFamily: "var(--font-bricolage), sans-serif" }}>
              {project.title}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: acc.color }}>{project.subtitle}</p>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 5).map((t, i) => <span key={`${i}-${t}`} className="tag">{t}</span>)}
          </div>
        </div>

        <div className="space-y-3">
          <p className="label-mono">Key highlights</p>
          <div className="grid grid-cols-2 gap-2">
            {project.highlights.map((h, i) => (
              <div
                key={`${i}-${h}`}
                className="text-center py-2.5 px-3 rounded-xl text-xs font-medium"
                style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-2)" }}
              >
                {h}
              </div>
            ))}
          </div>
          <div className="flex gap-3 pt-1" onClick={(e) => e.stopPropagation()}>
            <a href={project.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-medium transition-colors"
               style={{ color: acc.color }}>
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-medium transition-colors"
               style={{ color: "var(--text-3)" }}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              <Github className="w-3.5 h-3.5" /> Source
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Grid card (smaller) ──────────────────────────────────────────────────
function GridCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const acc = GRID_ACCENTS[index % GRID_ACCENTS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.55 }}
      className="group cursor-pointer rounded-2xl overflow-hidden flex flex-col card"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Open ${project.title} case study`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Screenshot header */}
      <div
        className="relative overflow-hidden"
        style={{ height: "140px", background: `linear-gradient(135deg, ${acc.dim}, transparent)`, borderBottom: `1px solid var(--border)` }}
      >
        {/* Browser chrome */}
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
        >
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#FEBC2E" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} />
          </div>
          <div
            className="flex-1 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono"
            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}
          >
            <Globe className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
            <span className="truncate">{project.domain}</span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="w-3 h-3" style={{ color: acc.color }} aria-hidden="true" />
          </a>
        </div>

        {/* Screenshot */}
        <div className="absolute inset-0 top-7 overflow-hidden">
          <ProjectScreenshot url={project.url} title={project.title} />
          <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(135deg, ${acc.dim}, transparent)` }} />
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 top-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(0,0,0,0.4)" }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col space-y-3">
        <div>
          <h3 className="font-bold text-base leading-tight" style={{ color: "var(--text-1)" }}>{project.title}</h3>
          <p className="text-xs mt-0.5" style={{ color: acc.color }}>{project.subtitle}</p>
        </div>
        <p className="text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: "var(--text-2)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t, i) => <span key={`${i}-${t}`} className="tag">{t}</span>)}
          {project.tags.length > 3 && (
            <span className="tag">+{project.tags.length - 3}</span>
          )}
        </div>
        <div
          className="flex items-center gap-4 pt-2"
          style={{ borderTop: "1px solid var(--border)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1 text-xs transition-colors"
             style={{ color: "var(--text-3)" }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
             aria-label={`${project.title} source code`}>
            <Github className="w-3.5 h-3.5" aria-hidden="true" /> Code
          </a>
          <a href={project.url} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1 text-xs transition-colors ml-auto"
             style={{ color: acc.color }}
             aria-label={`${project.title} live`}>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /> Live
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────
function Modal({ project, onClose, index }: { project: Project; onClose: () => void; index: number }) {
  const acc = GRID_ACCENTS[index % GRID_ACCENTS.length];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
      role="dialog" aria-modal="true" aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative w-full sm:max-w-xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl"
        style={{
          background: "var(--bg-card)",
          border: `1px solid ${acc.bd}`,
          boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual header — screenshot */}
        <div className="relative overflow-hidden" style={{ height: "180px" }}>
          {/* Browser chrome */}
          <div
            className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-2.5"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}
          >
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
            </div>
            <div
              className="flex-1 flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono mx-2"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
            >
              <Globe className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              {project.domain}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0 transition-all"
              style={{ background: acc.dim, color: acc.color, border: `1px solid ${acc.bd}` }}
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
              Visit site
            </a>
          </div>

          {/* Screenshot */}
          <div className="absolute inset-0 top-9 overflow-hidden">
            <ProjectScreenshot url={project.url} title={project.title} />
            <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(135deg, ${acc.dim}, transparent)` }} />
          </div>

          {/* Bottom overlay: category */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end px-5 pb-3 pt-8"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
            <span className="tag">{project.category}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-xl transition-all"
          style={{ background: "rgba(0,0,0,0.4)", color: "var(--text-2)", backdropFilter: "blur(8px)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
          aria-label="Close"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        <div className="p-7 space-y-5">
          <div>
            <h2 id="modal-title" className="text-xl font-bold" style={{ color: "var(--text-1)", fontFamily: "var(--font-bricolage), sans-serif" }}>
              {project.title}
            </h2>
            <p className="text-sm mt-0.5" style={{ color: acc.color }}>{project.subtitle}</p>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{project.longDescription}</p>

          <div>
            <p className="label-mono mb-3">Key metrics</p>
            <div className="grid grid-cols-2 gap-2">
              {project.highlights.map((h, i) => (
                <div
                  key={`${i}-${h}`}
                  className="text-sm text-center py-2.5 font-medium rounded-xl"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-2)" }}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="label-mono mb-3">Tech stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, i) => <span key={`${i}-${t}`} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="flex gap-3">
            <a href={project.url} target="_blank" rel="noopener noreferrer"
               className="btn-primary flex-1 justify-center text-xs py-3">
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="btn-ghost flex-1 justify-center text-xs py-3">
              <Github className="w-3.5 h-3.5" /> View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState<{ project: Project; index: number } | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const featured = filtered.filter((p) => p.featured);
  const regular  = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative section-padding"
      style={{ background: "var(--bg)" }}
      aria-labelledby="projects-heading"
    >
      <div className="container-wide">
        <SectionHeader
          label="Portfolio"
          title="Things I've "
          highlight="Built"
          description="Real platforms, real users, real impact. Each project solves a hard problem at scale."
          className="mb-12"
        />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="px-4 py-2 text-sm font-medium rounded-full transition-all"
              style={filter === c ? {
                background: "var(--violet-dim)",
                border: "1px solid var(--violet-bd)",
                color: "var(--violet)",
              } : {
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-3)",
              }}
              onMouseEnter={(e) => { if (filter !== c) e.currentTarget.style.color = "var(--text-2)"; }}
              onMouseLeave={(e) => { if (filter !== c) e.currentTarget.style.color = "var(--text-3)"; }}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured projects — full width */}
        <AnimatePresence mode="popLayout">
          {featured.length > 0 && (
            <motion.div
              key="featured-group"
              layout
              className="space-y-6 mb-6"
            >
              {featured.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                >
                  <FeaturedCard
                    project={p}
                    index={i}
                    onClick={() => setSelected({ project: p, index: i })}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Regular projects — 3-col grid */}
          {regular.length > 0 && (
            <motion.div
              key="regular-group"
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {regular.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <GridCard
                    project={p}
                    index={i + featured.length}
                    onClick={() => setSelected({ project: p, index: i + featured.length })}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--text-3)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--violet)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            More on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <Modal
            project={selected.project}
            index={selected.index}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
