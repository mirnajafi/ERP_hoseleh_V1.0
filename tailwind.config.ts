import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#1E3A8A",
        "green": "#8BC34A",
        "orange": "#F97316",
        "red": "#E02D40",
        "yellow": "#FBBF24",
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondry: {
          blue: {
            900: "#00194D",
          },
        },
        primery: {
          600: "#FF7101"
        },
        dashboard: {
          bg: "#F6F6F6"
        }
      },
    },
  },
  plugins: [],
};
export default config;
