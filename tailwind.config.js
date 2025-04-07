/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '18': '4.5rem', // 72px - intermediate size between h-16 and h-20
      },
    },
  },
  plugins: [],
};