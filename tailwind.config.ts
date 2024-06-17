import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "13px",
        "2xs": "12px",
      },
      colors: {
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
