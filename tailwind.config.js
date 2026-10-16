/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          blue: '#1E3A8A',
          white: '#FFFFFF',
          yellow: '#FFFF00',
          cream: '#F9F9F7',
          beige: '#F5F5F0',
          muted: '#6B6B6B',
          soft: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
