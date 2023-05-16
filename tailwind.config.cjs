/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'load-spinner': 'spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite',
      },
      keyframes: {
        spinner: {
          '0%': {
            height: '0%',
          },
          '50%, 100%': {
            height: '100%',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('@tailwindcss/line-clamp'),
  ],
};
