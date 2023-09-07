/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#010314',
        black: {
          100: '#2A2B3A',
          200: '#1C1E2E',
          200: '#BABCD2',
          700: '#010314',
          1000: '#000000',
        },
        purple: {
          500: '#6633EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['TT Firs Neue', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
};
