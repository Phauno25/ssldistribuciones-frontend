import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const primary = {
  dark: "#fdba22",
  main: "#FED769",
  light: "#fee489",
  extralight: "#fff1c6",
};
const secondary = {
  dark: "#2563eb",
  main: "#60a5fa",
  light: "#93c5fd",
  extraLight: "#d2e6fe",
};
const tertiary = {
  dark: "#9B8300",
  main: "#FFD700",
  light: "#FFE039",
  extralight: "#FFE764",
};
const success = {
  main: "#48bb78",
  dark: "#2f855a",
  light: "#68d391",
  extraLight: "#c6f6d5",
};
const error = {
  main: "#f56565",
  dark: "#c53030",
  light: "#fc8181",
  extraLight: "#feb2b2",
};
const background = {
  light: "#fafafa",
  dark: "#0a0a0a",
};
const surface = {
  main: "#29313a",
  dark: "#1e262e",
  light: "#3d5061",
  extralight: "#517389",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        default: "#000",
        inverted: "#fff",
        muted: "#777",
        primary,
        secondary,
      },
      colors: {
        neutral: { "1000": "#0A0A0A" },
        primary,
        secondary,
        success,
        error,
        surface,
        background,
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".border-gradient-main": {
          borderImageSource: `linear-gradient(45deg, ${primary.main}, ${secondary.main})`,
          borderImageSlice: "1",
        },
        ".bg-gradient-main": {
          backgroundImage: `linear-gradient(45deg, ${primary.main}, ${secondary.main})`,
          imageSlice: "1",
        },
        ".content-visibility-auto": { contentVisibility: "auto" },
      });
    }),
  ],
};
export default config;
