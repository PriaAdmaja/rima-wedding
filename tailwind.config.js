/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'home' : "url('./assets/background.webp')"
      },
      fontFamily : {
        msMadi : 'Ms Madi, cursive',
        quicksand : 'Quicksand, sans-serif',
        cinzel : 'Cinzel, serif'
      }
    },
  },
  plugins: [],
}

