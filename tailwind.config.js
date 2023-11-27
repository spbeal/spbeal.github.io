/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      scale:{
        '120': '1.20',
      },
      colors: {
        'cinereous': { DEFAULT: '#93827f', 100: '#1e1a19', 200: '#3b3433', 300: '#594e4c', 400: '#776865', 500: '#93827f', 600: '#a99c9a', 700: '#beb5b3', 800: '#d4cdcc', 900: '#e9e6e6' }, 
        'cambridge_blue': { DEFAULT: '#6ba292', 100: '#15211e', 200: '#2a423b', 300: '#3e6459', 400: '#538577', 500: '#6ba292', 600: '#89b5a9', 700: '#a7c8be', 800: '#c4dad4', 900: '#e2ede9' }, 
        'emerald': { DEFAULT: '#35ce8d', 100: '#0a2a1d', 200: '#145439', 300: '#1e7e56', 400: '#29a873', 500: '#35ce8d', 600: '#5ed8a5', 700: '#86e2bc', 800: '#afecd2', 900: '#d7f5e9' }, 
        'celadon': { DEFAULT: '#bcd8b7', 100: '#1f341c', 200: '#3f6738', 300: '#5e9b54', 400: '#8bbc82', 500: '#bcd8b7', 600: '#c9e0c5', 700: '#d6e7d3', 800: '#e4efe2', 900: '#f1f7f0' }, 
        'almond': { DEFAULT: '#e0d2c3', 100: '#372a1c', 200: '#6e5539', 300: '#a67f55', 400: '#c3a88b', 500: '#e0d2c3', 600: '#e6dbcf', 700: '#ece4db', 800: '#f3ede7', 900: '#f9f6f3' }, 
          }
    },
  },
  plugins: [],
}

