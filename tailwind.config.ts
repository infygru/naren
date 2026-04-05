import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg:         "#0A0A0F",
        "bg-2":     "#111118",
        "bg-card":  "#1C1C26",
        elevated:   "#252532",
        violet:     "#8B5CF6",
        pink:       "#EC4899",
        cyan:       "#06B6D4",
        "clr-green":"#22C55E",
        amber:      "#F59E0B",
        "text-1":   "#F1F0FF",
        "text-2":   "#9896B0",
        "text-3":   "#5C5A72",
      },
      animation: {
        marquee:    "marquee 35s linear infinite",
        float:      "float 4s ease-in-out infinite",
        "spin-slow":"spin-slow 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
