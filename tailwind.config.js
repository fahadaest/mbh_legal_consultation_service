/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        offWhite: '#F3F3F3',
        darkGrey: '#1E1E1E',
        lightGrey: '#151439',
        lightBrown: '#643F2E',
        darkBrown: '#4B2615',
      },
      height: {
        'screen-minus-header': 'calc(100vh - 64px)',
      },
      backgroundOpacity: {
        68: '0.68',
      },
    },
  },
  plugins: [],
}