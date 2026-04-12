import type { Config } from "tailwindcss";
 
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.92)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sheen: {
          "0%": { transform: "translateX(0) skewX(-12deg)" },
          "100%": { transform: "translateX(260%) skewX(-12deg)" },
        },
        drift: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0px)" }
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        sheen: "sheen 800ms ease-out 1",
        drift: "drift 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;