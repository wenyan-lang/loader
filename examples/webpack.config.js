const path = require('path')

module.exports = {
  entry: './src/序.wy',
  output: {
    filename: 'index.js',
  },
  mode: "development",
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.wy$/,
        use: [
          {
            loader: path.resolve('../index.js'),
            options: {
              strict: true,
            }
          }
        ]
      }
    ]
  }
};