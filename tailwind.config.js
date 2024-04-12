/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...require('tailwindcss/colors'),
      home: "#F1D27F",
      homeText: "#714E13",
      blue: '#0000FF',
      red: "#FF0000",
      silver: "#F0F0F0",
    }
  },
  plugins: [],
}