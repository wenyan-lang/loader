const path = require('path')

module.exports = {
  entry: './src/圖靈機.wy',
  output: {
    filename: '圖靈機.js',
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