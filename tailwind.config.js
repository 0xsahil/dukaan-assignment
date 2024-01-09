/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBg': '#1e2640',
        'whiteBg': '#fafafa',
        'black80': '#4D4D4D',
      }
    }
  },
  plugins: [],
}