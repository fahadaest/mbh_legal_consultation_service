/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        offWhite: 'F3F3F3',
        darkGrey: '#1E1E1E',
        lightGrey: '#151439',
        lightBrown: '#643F2E',
        darkBrown: '#4B2615',
      },
    },
  },
  plugins: [],
}