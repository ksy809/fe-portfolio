import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0b",
          soft: "#101013",
          card: "#111114",
        },
        line: {
          DEFAULT: "#1f1f24",
          soft: "#26262d",
        },
        accent: {
          DEFAULT: "#34d399",
          soft: "#10b981",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
