module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'vp-black' : '#060A0C'
    }), 
    extend: {
      backgroundImage: {
        'vp-blue-purple' : 'linear-gradient(90deg, #18275C 0%, #6C106D 100%)',
        'vp-green-blue'  : 'linear-gradient(96.31deg, #2D8E95 0%, #7219E2 102.56%)',
        'vp-blue-black'  : 'linear-gradient(180deg, #191E33 0%, rgba(10, 14, 27, 0.56) 100%)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
     fontFamily: false,
    }
}
