/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray" : "#F7F7F7;",
        "primary-yellow" : "#FFE68C",
        "accent-orange" : "#f97316",
        "accent-yellow" : "#fcd34d",
        "accent-blue" : "#404495",
        "button-orange" : "#F85A25",
        "button-gray" : "#EEF1F7",
      },
    },
  },
  plugins: [],
}

