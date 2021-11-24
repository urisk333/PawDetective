module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {'small':'300px'},
    extend: {
      backgroundImage: {
        'paws': "url('assets/background1.jpg')",
      },
      spacing: {
        'djr': '1000px',
        'djr-side': '20%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// client/src/assets/background.jpg
