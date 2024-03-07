import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    // Some useful comment 
    extend: {
      fontFamily: {
        BricolageGrotesque: ['BricolageGrotesque', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Chakra: ['Chakra Petch', 'sans-serif'],
      },
    },
    animation: {
      marquee: 'marquee 30s linear infinite',
      marquee2: 'marquee2 30s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': {transform: 'translateX(0%)'},
        '100%': {transform: 'translateX(-100%)'},
      },
      marquee2: {
        '0%': {transform: 'translateX(100%)'},
        '100%': {transform: 'translateX(0%)'},
      },
    },
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [formsPlugin, typographyPlugin],
};
