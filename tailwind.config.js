const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: '#111121',
          accent: '#0b2e4f',
        },
        white: {
          DEFAULT: '#f5f5f5',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
