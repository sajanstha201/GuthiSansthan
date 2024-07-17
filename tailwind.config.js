// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Adjust this to match your project structure
  ],
  theme: {
    extend: {
      height: {
        '100vh-100px': 'calc(100vh - 100px)',
        '100vh-80px':'calc(100vh - 80px)'
      },
      keyframes: {
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        rotateY: 'rotateY 0.7s forwards',
      },
    },
  },
  plugins: [],
};
