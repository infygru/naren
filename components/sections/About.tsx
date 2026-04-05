"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import { EDUCATION } from "@/lib/constants";

const BIG_STATS = [
  { value: 10,   suffix: "+", label: "Years of experience",       color: "var(--violet)", desc: "Building production platforms" },
  { value: 3915, suffix: "",  label: "n8n automation executions", color: "var(--pink)",   desc: "At 0% failure rate" },
  { value: 99,   suffix: "",  label: "PageSpeed score",           color: "var(--cyan)",   desc: "Delivered in production" },
  { value: 0,    suffix: "%", label: "Automation failure rate",   color: "var(--green)",  desc: "Across all pipelines" },
];

const WHAT_I_DO = [
  "Design scalable Next.js digital platforms for international brands",
  "Architect n8n automation pipelines handling thousands of executions",
  "Provision and manage self-hosted KVM VPS infrastructure via Coolify",
  "Build UK-compliant platforms for healthcare and recruitment sectors",
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="about"
      className="relative section-padding"
      style={{ background: "var(--bg-2)" }}
      aria-labelledby="about-heading"
    >
      {/* Subtle top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--violet), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-wide">

        {/* Section label */}
        <motion.p
          className="label-mono mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About
        </motion.p>

        {/* Two-column: giant metrics LEFT, bio text RIGHT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — giant stacked numbers */}
          <div ref={ref} className="space-y-8">
            {BIG_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="flex items-baseline gap-5 group"
              >
                {/* Number */}
                <div
                  className="display-text leading-none select-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: stat.color }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.2}
                      delay={i * 0.15}
                      suffix={stat.suffix}
                      useEasing
                    />
                  ) : `0${stat.suffix}`}
                </div>

                {/* Labels */}
                <div className="space-y-0.5 flex-1">
                  <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
                    {stat.label}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-3)" }}>
                    {stat.desc}
                  </p>
                </div>

                {/* Accent line */}
                <motion.div
                  className="h-px flex-1 max-w-12 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: stat.color }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>

          {/* Right — bio + what I do + education */}
          <div className="space-y-10">

            {/* Bio */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                I&apos;m Narendran C — a Lead Solutions Architect based in Chennai with a proven track record of designing, deploying, and scaling digital infrastructure across multiple international brands. I specialize in Next.js, full-stack development, and advanced business process automation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-base leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                At Infygru, I&apos;ve architected automation pipelines handling 3,915 production executions with a 0% failure rate, built UK travel platforms scoring 99 Performance on PageSpeed, and managed self-hosted KVM VPS environments running at sub-30% CPU.
              </motion.p>
              <motion.a
                href="#experience"
                onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="inline-flex items-center gap-2 text-sm font-medium group transition-colors"
                style={{ color: "var(--violet)" }}
              >
                View full career timeline
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </motion.a>
            </div>

            {/* What I do */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p className="label-mono">What I do</p>
              <ul className="space-y-2.5" role="list">
                {WHAT_I_DO.map((item, i) => (
                  <motion.li
                    key={`${i}-${item.slice(0, 15)}`}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-2)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: "var(--violet)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p className="label-mono">Education</p>
              <div className="space-y-3">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 rounded-xl"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderLeft: "3px solid var(--violet)",
                    }}
                  >
                    <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>{edu.degree}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--violet)" }}>{edu.institution}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs" style={{ color: "var(--text-3)" }}>{edu.period}</span>
                      <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>{edu.grade}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
