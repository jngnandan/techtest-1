const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastal: '#F6F6F8',
        skybluish: '#98C5E9',
        darkish: '#001838',
        grayish: '#DAE8F3',
      }
    },
  },
  fontFamily: {
    'poppins': ['Poppins', 'SFProText-Bold']
  },
  plugins: [],
}