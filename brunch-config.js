// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'app.css': /^app/
    }
  }
}

exports.plugins = {
  babel: {
    presets: ['es2015', 'react'],
    plugins: [
      'transform-es2015-spread',
      'transform-object-rest-spread',
      ['module-resolver/lib/index.js', {
        'alias': {
          // This will cause require paths starting with `/` to resolve to the
          // `app` directory. i.e. `/app.js` resolves to `app/app.js`.
          '': './app'
        }
      }],
      ['jsx-import/src/index.js', {
        'identifier': 'Preact',
        'moduleName': 'preact'
      }],
      ['transform-react-jsx', {'pragma': 'Preact.h'}]
    ]
  }
}
