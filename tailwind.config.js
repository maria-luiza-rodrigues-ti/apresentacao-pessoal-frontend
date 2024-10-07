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
        'light-background-gradient': 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

