/** @type {import('tailwindcss').Config} */

// Theme colours live as RGB channels on CSS variables (see src/index.css),
// so every utility keeps working with opacity modifiers: bg-accent/10 etc.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        panel: token("panel"),
        line: { DEFAULT: token("line"), strong: token("line-strong") },
        fg: { DEFAULT: token("text"), dim: token("text-dim"), mute: token("text-mute") },
        hash: token("hash"),
        accent: { DEFAULT: token("accent"), hover: token("accent-hover") },
        ok: token("ok"),
        dot: {
          close: token("dot-close"),
          minimize: token("dot-minimize"),
          maximize: token("dot-maximize"),
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        body: ['"Schibsted Grotesk"', "sans-serif"],
        display: ['"Bricolage Grotesque"', "sans-serif"],
      },
      // Tailwind v4 accepts any multiple of the spacing unit (mb-5.5, pt-19);
      // v3 needs the in-between steps the design uses spelled out.
      spacing: {
        1.75: "0.4375rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
        19: "4.75rem",
        35: "8.75rem",
      },
      maxWidth: {
        310: "77.5rem",
      },
      zIndex: {
        45: "45",
        51: "51",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" } },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        glitch: {
          "0%, 91%, 100%": { textShadow: "none", transform: "none" },
          "92%": {
            textShadow: "-4px 0 rgb(var(--glitch)), 4px 0 rgb(var(--text) / 0.9)",
            transform: "translateX(3px) skewX(-4deg)",
          },
          "94%": {
            textShadow: "4px 0 rgb(var(--glitch)), -4px 0 rgb(var(--text) / 0.9)",
            transform: "translateX(-3px)",
          },
          "96%": { textShadow: "none", transform: "none" },
        },
        "grow-bar": { from: { width: "0" } },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgb(var(--dot-maximize) / 0.55)" },
          "70%": { boxShadow: "0 0 0 9px rgb(var(--dot-maximize) / 0)" },
          "100%": { boxShadow: "0 0 0 0 rgb(var(--dot-maximize) / 0)" },
        },
        beam: {
          from: { top: "-140px" },
          to: { top: "100%" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        marquee: "marquee 20s linear infinite",
        glitch: "glitch 4s steps(1) infinite",
        "grow-bar": "grow-bar 1.2s ease-out both",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        beam: "beam 8s linear infinite",
        "fade-in": "fade-in 0.5s ease both",
      },
    },
  },
  plugins: [],
};
