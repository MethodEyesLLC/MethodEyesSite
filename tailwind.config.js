/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      serif: ['Gloock', 'serif'],
    },
    extend: {
      spacing: {
        30: '120px',
      },
      maxWidth: {
        '6.5xl': '1200px',
      },
      colors: {
        coral: { 100: '#FCF8F7', 500: '#D5563D' },
        midnight: '#0A1524',
        heather: '#9E7EB9',
        walnut: '#C7BEBC',
      },
      borderRadius: {
        '4xl': '32px',
      },
      lineHeight: {
        12: '54px',
      },
    },
  },
  plugins: [],
};
