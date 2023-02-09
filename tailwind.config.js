/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nova: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue"],
      },
      colors: {
        beige: "#DDC7A0",
        gold: "#C19D20",
        gris: "#D9D9D9",
        fonce: "#A0A1A1",
        peps: "#A9A9A9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
