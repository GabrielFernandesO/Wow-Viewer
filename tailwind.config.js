/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'bg-lich':"url('/imgs/bg-page.jpg')",
        'bg-login':"url('/imgs/bg-login-1.jpg')"
      },
      fontFamily:{
        fontWow:['Inter',]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
