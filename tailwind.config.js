const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: '#01071A',
      card: '#1C1F37',
      transparent: colors.transparent,
      white: '#FFFFFF',
      blue: colors.blue,
      yellow: colors.yellow,
      gray: colors.gray
    },
    extend: {},
  },
  plugins: [],
}

