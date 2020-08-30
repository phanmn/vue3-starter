const defaultTheme = require('tailwindcss/defaultTheme')
// import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './index.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
    // etc.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}