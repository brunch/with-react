exports.config = {
  npm: {
    enabled: true
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'],
      pattern: /\.(es6|jsx|js)$/
    }
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  }
};
