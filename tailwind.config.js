module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        silverPink: '#C9B1AD',
        RedRYB: '#FF2626' }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
