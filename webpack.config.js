var path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
    filename: `[name].js` // by default, name = main
  },
}