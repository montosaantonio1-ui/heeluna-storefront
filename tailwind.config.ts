import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E2420",
        stone: "#EFEAE0",
        card: "#FBF8F2",
        pine: {
          DEFAULT: "#2B3D33",
          light: "#3E5647",
          dark: "#1B2921",
        },
        clay: {
          DEFAULT: "#C4633F",
          light: "#DD8C68",
          dark: "#A34E30",
        },
        sage: {
          DEFAULT: "#9CAE95",
          light: "#C4D0BD",
        },
        gold: "#B98A46",
        line: "#DDD5C7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(30,36,32,0.04), 0 8px 24px rgba(30,36,32,0.06)",
        lift: "0 4px 10px rgba(30,36,32,0.08), 0 16px 40px rgba(30,36,32,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-shadow": {
          "0%, 100%": { transform: "scaleX(1)", opacity: "0.4" },
          "50%": { transform: "scaleX(0.78)", opacity: "0.2" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 4.5s ease-in-out infinite",
        "float-shadow": "float-shadow 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
