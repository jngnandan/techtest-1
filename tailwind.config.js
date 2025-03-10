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
        grayish: '#DAE8F3',
        darkblue: '#001838',
      }
    },
  },
  fontFamily: {
    'poppins': ['Poppins', 'SFProText-Bold']
  },
  plugins: [],
}