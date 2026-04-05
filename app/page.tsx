"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

// Sections (static — above the fold)
import Hero from "@/components/sections/Hero";

// Effects
import LoadingScreen from "@/components/effects/LoadingScreen";
import CustomCursor from "@/components/effects/CustomCursor";
import BackToTop from "@/components/effects/BackToTop";

// Lazy-loaded sections (below the fold)
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <SectionSkeleton />,
});
const Experience = dynamic(() => import("@/components/sections/Experience"), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <SectionSkeleton />,
});
const Architecture = dynamic(
  () => import("@/components/sections/Architecture"),
  { loading: () => <SectionSkeleton /> }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { loading: () => <SectionSkeleton /> }
);
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <SectionSkeleton />,
});

// ─── Section Skeleton ─────────────────────────────────────────────────────
function SectionSkeleton() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading / min display time
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen isVisible={isLoading} />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main content — hidden during loading */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main id="main-content" role="main">
          {/* Hero — Above the fold, not lazy loaded */}
          <Hero />

          {/* Below fold — lazy loaded */}
          <Projects />
          <Experience />
          <Skills />
          <Architecture />
          <About />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to top button */}
        <BackToTop />
      </div>
    </>
  );
}
