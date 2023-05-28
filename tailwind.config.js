/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#010314',
        black: {
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
    },
  },
  plugins: [],
};
