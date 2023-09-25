import scrollbarPlugin from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B6533',
        secondary: '#DCA63F',
        yellow: '#dcca3f',
        white: '#fff',
        black: '#2F2F41',
        pureBlack: '#000',
        link: '#0751C5',
        gray: '#374151',
        transparet: '#FFFFFF00',
      },

      boxShadow: {
        custom: '0 0 30px 2px  rgba(0, 0, 0, 0.3)',
        profile: '0 0 12px 2px  rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [scrollbarPlugin],
};
