import type { Config } from "tailwindcss";
 
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Consolas", "monospace"],
      },
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-2": "rgb(var(--paper-2) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        "line-soft": "rgb(var(--line-soft) / <alpha-value>)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(-6deg)" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        pulse: "pulse 2.4s ease-in-out infinite",
        wobble: "wobble 6s ease-in-out infinite",
        draw: "draw 1400ms cubic-bezier(.7,0,.3,1) 800ms forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;