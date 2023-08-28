import scrollbarPlugin from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Poppins'],
    },
    extend: {
      colors: {
        primary: '#0B6533',
        secondary: '#DCA63F',
        white: '#fff',
        black: '#2F2F41',
        pureBlack: '#000',
        link: '#0751C5',
        gray: '#374151',
        transparet: '#FFFFFF00',
      },

      boxShadow: {
        custom: '0 0 30px 2px  rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [scrollbarPlugin],
};
