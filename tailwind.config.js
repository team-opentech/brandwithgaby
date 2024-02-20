import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    // Some useful comment
    fontFamily: {
      'Bricolage-Grotesque': ['Bricolage Grotesque', 'sans-serif'],
      Inter: ['Inter', 'serif'],
      Chakra: ['Chakra Petch', 'sans-serif'],
    },
    extend: {
      keyframes: {
        marquee: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },
      animation: {
        'marquee-infinite': 'marquee 50s linear infinite',
      },
    },
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [formsPlugin, typographyPlugin],
};
