"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG, SERVICE_PAGES } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen]            = useState(false);
  const [scrolled, setScrolled]        = useState(false);
  const [activeSection, setActive]     = useState("");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  // Close services dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));

    const attach = () => {
      const observers = ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const o = new IntersectionObserver(
          ([e]) => { if (e.isIntersecting) setActive(id); },
          { threshold: 0.2, rootMargin: "-80px 0px -45% 0px" }
        );
        o.observe(el);
        return o;
      });
      return observers;
    };

    let observers = attach();
    const retryTimer = setTimeout(() => {
      observers.forEach((o) => o?.disconnect());
      observers = attach();
    }, 3000);

    return () => {
      clearTimeout(retryTimer);
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 50);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={scrolled ? {
          background: "rgba(22,24,42,0.90)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.09)",
        } : {
          background: "transparent",
        }}
        role="banner"
      >
        <nav
          className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span
              className="text-xl font-black"
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
              className="font-semibold text-sm tracking-tight hidden sm:block"
              style={{ color: "var(--text-2)" }}
            >
              {SITE_CONFIG.shortName}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="relative px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-150"
                    style={{ color: isActive ? "var(--text-1)" : "var(--text-3)" }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text-2)"; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text-3)"; }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}

            {/* Services dropdown */}
            <li ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="relative flex items-center gap-1 px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-150"
                style={{ color: servicesOpen ? "var(--text-1)" : "var(--text-3)" }}
                onMouseEnter={(e) => { if (!servicesOpen) e.currentTarget.style.color = "var(--text-2)"; }}
                onMouseLeave={(e) => { if (!servicesOpen) e.currentTarget.style.color = servicesOpen ? "var(--text-1)" : "var(--text-3)"; }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className="w-3 h-3 transition-transform duration-200"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 rounded-2xl overflow-hidden"
                    style={{
                      background: "rgba(28,31,54,0.98)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid var(--border)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                    }}
                    role="menu"
                  >
                    <ul className="p-2 space-y-0.5">
                      {SERVICE_PAGES.map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-3 rounded-xl transition-all"
                            style={{ color: "var(--text-2)" }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
                              (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.08)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                              (e.currentTarget as HTMLElement).style.background = "transparent";
                            }}
                            role="menuitem"
                          >
                            <p className="text-xs font-semibold">{svc.label}</p>
                            <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{svc.description}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Blog */}
            <li>
              <Link
                href="/blog"
                className="relative px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-150 block"
                style={{ color: "var(--text-3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-3)"; }}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {SITE_CONFIG.availableForWork && (
              <span
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--green-dim)",
                  border: "1px solid var(--green-bd)",
                  color: "var(--green)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--green)" }} aria-hidden="true" />
                Available
              </span>
            )}
            <motion.a
              href="/Narendran_Resume.pdf"
              download
              className="btn-primary text-xs px-4 py-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Download CV"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-4 h-4" /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-4 h-4" /></motion.span>
              }
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[76px] z-40 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(28,31,54,0.98)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--border)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
            role="dialog"
            aria-label="Mobile menu"
          >
            <ul className="p-3 space-y-0.5">
              {/* Anchor links */}
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all"
                    style={{ color: "var(--text-2)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text-1)";
                      e.currentTarget.style.background = "rgba(139,92,246,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-2)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}

              {/* Services section */}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="pt-2"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
                  Services
                </p>
                <ul className="space-y-0.5">
                  {SERVICE_PAGES.map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2.5 text-sm rounded-xl transition-all"
                        style={{ color: "var(--text-2)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
                          (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                      >
                        {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.li>

              {/* Blog */}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (NAV_LINKS.length + SERVICE_PAGES.length) * 0.04 }}
                className="pt-1"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-xl transition-all"
                  style={{ color: "var(--text-2)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  Blog
                </Link>
              </motion.li>

              {/* Resume CTA */}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (NAV_LINKS.length + SERVICE_PAGES.length + 1) * 0.04 + 0.05 }}
                className="pt-2"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <a
                  href="/Narendran_Resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center mt-2 text-xs py-2.5"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
