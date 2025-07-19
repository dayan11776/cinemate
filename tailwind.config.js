/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
        colors:{
          "purple":"#1f2937"
        },
        screens:{
          "maxWidth":"1280px"
        }
    },
  },
  plugins: [],
}

