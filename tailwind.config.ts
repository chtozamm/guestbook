import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xs: "13px",
        "2xs": "12px",
      },
      colors: {
        "light-dark": "#4c566a",
        "dark-light": "#eceff4",
        "utility-dark": "#4c566a",
        snow: "#f8f9fb",
        night: "#2e3440",
        accent: "#88c0d0",
        utility: "#eceff4",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
export default config;
