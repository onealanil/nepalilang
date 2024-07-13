/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00bf62",
        bg: "#F1F8F3",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"], //heading and text
    },
  },
  plugins: [
    // require("tailwind-scrollbar-hide"),
    // require("tailwind-scroll-behavior")(),
    // require('@tailwindcss/line-clamp'),
    // require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};