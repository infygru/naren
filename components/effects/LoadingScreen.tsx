"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const t = setInterval(() => {
      setProgress((p) => {
        const inc = p < 60 ? 6 : p < 85 ? 2 : 0.8;
        return Math.min(p + inc, 100);
      });
    }, 40);
    return () => clearInterval(t);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
          role="status"
          aria-label="Loading portfolio"
        >
          {/* Ambient glow */}
          <div
            className="glow-blob w-[400px] h-[400px] opacity-20"
            style={{
              background: "radial-gradient(circle, var(--violet), transparent 70%)",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-8 z-10">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-16 h-16 flex items-center justify-center rounded-2xl text-3xl font-black text-white"
              style={{
                background: "linear-gradient(135deg, var(--violet), var(--pink))",
                boxShadow: "0 0 40px rgba(139,92,246,0.4)",
              }}
            >
              N
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ border: "1px solid rgba(139,92,246,0.5)" }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Name + role */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-1"
            >
              <p
                className="text-lg font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-bricolage), sans-serif", color: "var(--text-1)" }}
              >
                Narendran C
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-3)" }}
              >
                Lead Solutions Architect
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-52 space-y-2"
            >
              <div
                className="h-[2px] w-full overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-100"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, var(--violet), var(--pink))",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-3)" }}
                >
                  initializing
                </span>
                <span
                  className="text-[11px] font-bold"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--violet)" }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
