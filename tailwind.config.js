/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      scale:{
        '120': '1.20',
      }
    },
  },
  plugins: [],
}

