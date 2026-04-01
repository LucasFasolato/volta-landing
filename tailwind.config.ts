import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131317",
        surface: "#131317",
        "surface-container-lowest": "#0e0e12",
        "surface-container-low": "#1b1b1f",
        "surface-container": "#1f1f23",
        "surface-container-high": "#2a292e",
        "surface-container-highest": "#353439",
        primary: "#00FF88",
        "primary-dim": "#00e479",
        secondary: "#4dffb8",
        "on-surface": "#e4e1e7",
        "on-surface-variant": "#b9cbb9",
        "outline-variant": "#3b4b3d",
      },
      fontFamily: {
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        widest: "0.1em",
      },
      backgroundImage: {
        "gradient-cta": "linear-gradient(135deg, #00FF88, #4dffb8)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;