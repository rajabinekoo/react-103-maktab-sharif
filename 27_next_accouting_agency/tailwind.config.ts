import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      space: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      colors: {
        gray: {
          50: "#F9FAFB",
          300: "#D1D5DB",
          700: "#374151",
        },
        red: {
          50: "#FEF2F2",
          300: "#FCA5A5",
          600: "#DC2626",
        },
        danger: "#DC2626",
        primary: {
          400: "#A78BFA",
          700: "#6D28D9",
          800: "#5B21B6",
        },
      },
      boxShadow: {
        card: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
