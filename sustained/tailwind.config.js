const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {  // adding a custom breakpoint
        xs: '480px'
      },
      colors: {
        green: {
          500: "#17C964",
          600: "#12A150",
          700: "#0E793C"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
  })],
}