/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'home' : "url('./assets/background.webp')",
        'arRum' : "url('./assets/backg-2.webp')",
        'waterColor': "url('./assets/watercolor.jpg')"
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

