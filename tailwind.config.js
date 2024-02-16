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
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [formsPlugin, typographyPlugin],
};
