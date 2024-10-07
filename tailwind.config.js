/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
      },
      colors: {
        'dark-neutral-1': '#E3E4E6',
        'dark-neutral-2': 'rgba(227, 228, 230, 0.55)',
        'light-neutral-1': '#4A4A50',
        'light-neutral-2': 'rgba(50, 50, 55, 0.75)',
      },
      backgroundImage: {
        'dark-primary-gradient': 'linear-gradient(to left, #904e95, #e96443)',
        'dark-background-gradient': 'linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)',
        'light-primary-gradient': 'linear-gradient(99deg, #7A1F8F 0.07%, #8A2D54 106.32%)',
        'light-background-gradient': 'linear-gradient(180deg, #33333D 16.39%, #3D3D46 20.51%, #4A4A54 24.79%, #50505B 30.46%, #575761 34.11%, #5E5E68 36.21%, #66666F 100%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

