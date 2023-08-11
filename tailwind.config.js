const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.html", "./css/*.css"],
  theme: {
    extend: {
      colors: {
        primary: "#9fbe42",
        secondary: "#737373"
      }
    },
  },
  plugins: [],
}