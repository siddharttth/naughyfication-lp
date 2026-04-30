import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        background: "#03040a",
        foreground: "#f8f7fb",
        muted: "#a7a3b6",
        border: "rgba(255,255,255,0.12)",
        primary: {
          DEFAULT: "#ff3ebf",
          soft: "#ff83d8",
          deep: "#a31972"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(255, 62, 191, 0.35)",
        "glow-lg": "0 0 120px rgba(255, 62, 191, 0.32)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.45)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.75" }
        }
      },
      animation: {
        shimmer: "shimmer 5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-line": "pulseLine 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: [forms]
};

export default config;
