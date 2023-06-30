/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  // darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:['light']
  }
}