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
      },
      animation: {
        'slideshow': 'slideshow 18s linear infinite',
        'slideshow2': 'slideshow2 18s linear infinite',
        'popup-spin': 'rotation 4s infinite linear',
      },
    },
    keyframes: {
      slideshow: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideshow2: {
        '100%': { transform: 'translateX(0)' },
        '0%': { transform: 'translateX(-100%)' },
      },
      

    },
  },
  plugins: [],
}

