/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#77a0ce',
        header: '#5a86b9',
        secondary: '#bad8eb',
        light: '#f7fbfc',
        dark: '#6B8BC3',
        textColor: '#333',
        textLight: '#F5F8FC',
        sectionBgLight: '#f7fbfc',
        sectionBgDarker: '#e9f0f7',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        card: '0 5px 15px rgba(0, 0, 0, 0.05)',
        cardHover: '0 10px 20px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
