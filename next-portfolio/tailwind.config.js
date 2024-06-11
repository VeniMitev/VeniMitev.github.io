/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: "#171515",
        linkedin: "#0072b1",
        instagram: "#8a3ab9",
        youtube: "#ff0000",
      }
    },
    screens: {
      xs: "475px",
      '3xl': "1600px",
      '4xl': "1920px",
      ...require("tailwindcss/defaultConfig").theme.screens
    }
  },
  plugins: [],
  darkMode: "class",
}
