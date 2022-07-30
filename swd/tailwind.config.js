/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'main': ['Source Code Pro',],
    },
    extend: {
      colors: {
        'off-black': '#111111'
      }
    },
  },
  plugins: [],
}
