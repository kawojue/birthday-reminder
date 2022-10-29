/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        "pry-clr-0": "rgb(242, 138, 178)",
        "pry-clr-1": "rgb(16, 42, 66)",
        "pry-clr-2": "rgb(97, 125, 152)",
      }
    },
  },
  plugins: [],
}