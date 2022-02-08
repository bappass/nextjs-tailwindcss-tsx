const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFDEB',
          100: '#FEFAD7',
          200: '#FEF5AA',
          300: '#FDF181',
          400: '#FDEC59',
          500: '#FCE72D',
          600: '#ECD503',
          700: '#B09F02',
          800: '#746802',
          900: '#3C3601',
        },
        newgray: '#F7F7FB',
        graymoon: '#E8E8FB',
        graysand: '#BFBFE3',
        grayfoot: '#808080',
        purpleberry: '#5B25D4',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
        mono: ['IBM Plex Mono', 'ui-monospace'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.bg-hero': {
          'background-image': 'url(/hero.png)',
          'background-size': 'cover',
          'background-position': 'bottom',
          'background-repeat': 'no-repeat',
        },
        '.newshadow': {
          'box-shadow': '0px 15px 30px rgba(0, 0, 0, 0.1)',
        },
        '.bg-blurring': {
          background: 'transparent',
          'backdrop-filter': 'blur(10px)',
        },
      }

      addUtilities(utilities)
    }),
  ],
}
