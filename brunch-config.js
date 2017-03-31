// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
}

exports.plugins = {
  babel: {
    presets: ['env', 'react'],
    plugins: [
      ['babel-plugin-module-resolver', {
        'alias': {
          // This will cause require paths starting with `/` to resolve to the
          // `src` directory. i.e. `/app.js` resolves to `src/app.js`.
          '': './src'
        }
      }],
      ['./node_modules/babel-plugin-jsx-import/src/index.js', {
        'identifier': 'Preact',
        'moduleName': 'preact'
      }],
      ['transform-react-jsx', {'pragma': 'Preact.h'}]
    ]
  }
}
