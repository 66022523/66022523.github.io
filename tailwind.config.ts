import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./source/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Prompt", "sans-serif"],
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
