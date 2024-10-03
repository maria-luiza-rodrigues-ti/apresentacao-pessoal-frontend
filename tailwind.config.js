/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'selector',
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Nanum Pen Script', 'serif'],
      },
      colors: {
        'onyx': '#181818',
        'dark-gray': '#808080',
        'medium-gray': 'rgba(128, 128, 128, 0.5)',
        'light-gray': '#C5C5C5',
        'light-blue': 'rgba(63, 100, 234, 0.43)',
        'light-red': 'rgba(233, 63, 64, 0.43)',
        'light-yellow': 'rgba(255, 184, 0, 0.43)',
        'dark-card-border': '#383737',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-25': 'rgba(255, 255, 255, 0.25)',
        'white-70': 'rgba(255, 255, 255, 0.7)',
        'black-50': 'rgba(21, 21, 21, 0.5)',
        'light-main-bg': '#FBFBFB',
        'faint-white': '#f3f3f3',
        'light-card-border': '#EBEBEB',
        'card-bg': '#F6F6F6',
        'black-10': 'rgb(21, 21, 21, 0.1)',
        'dark-main-bg': '#1A1A1A',
        'card-bg': '#131313',
        'dark-header-bg': 'rgba(24, 24, 29, 0.30);',
      },
      boxShadow: {
        "button": " 0px 1px 2px 0px rgba(255, 255, 255, 0.02) inset, 0px 2px 4px 0px rgba(255, 255, 255, 0.08) inset, 0px 7px 4px 0px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}

