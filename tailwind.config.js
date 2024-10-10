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
        'dark-background-gradient': 'linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)',
        'light-background-gradient': 'linear-gradient(to right, #da4453, #89216b)',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

