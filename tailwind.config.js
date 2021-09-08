module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        silverPink: '#C9B1AD',
        redRYB: '#FF2626',
        roseMadder: '#D93F3C',
        cultured: '#F9FAFB',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
