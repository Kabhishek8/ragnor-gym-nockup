module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#F5C518',
          dark: '#050505',
          smoke: '#111111'
        }
      },
      boxShadow: {
        glow: '0 20px 80px rgba(245,197,24,0.15)',
        soft: '0 20px 50px rgba(0,0,0,0.25)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
