"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div className={cn("space-y-4", align === "center" ? "text-center" : "text-left", className)}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn("label-mono", align === "center" && "block")}
        >
          {label}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1], delay: 0.06 }}
        className="text-balance"
        style={{
          fontFamily: "var(--font-bricolage), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "var(--text-1)",
        }}
      >
        {highlight ? (
          <>
            {title}
            <span className="gradient-text">{highlight}</span>
          </>
        ) : title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1], delay: 0.14 }}
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
          style={{ color: "var(--text-2)" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
