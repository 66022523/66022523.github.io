/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Prompt", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
