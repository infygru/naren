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
        // ── Ink scale (used in blog/service pages) ──
        ink: {
          100: "#DDE1F5",
          200: "#B8BDD6",
          300: "#9DA2C4",
          400: "#8B90B8",
          500: "#6C7196",
          600: "#545878",
          700: "#3E4260",
          800: "#2C304A",
          900: "#1E2138",
        },
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
