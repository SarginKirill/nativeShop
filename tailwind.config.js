/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        lightSand: '#FCF7E6',
        dark: '#000',
        white: '#fff',
        orange: '#ED5E21',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      pseudoElements: {
        'after-md': 'after',
      },
    },
  },
  plugins: [],
};
