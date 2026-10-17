import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        blueprint: "var(--blueprint)",
        callout: "var(--callout)",
        rule: "var(--rule)",
      },
      fontFamily: {
        sans: ['"Avenir Next"', "Avenir", "Segoe UI", "system-ui", "sans-serif"],
        mono: ['"SF Mono"', "Menlo", "Consolas", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
