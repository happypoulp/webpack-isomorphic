var path = require('path')
var WebpackIsoToolsPlugin = require('webpack-isomorphic-tools/plugin')

var isomorphicPlugin = new WebpackIsoToolsPlugin(require('./webpack-isomorphic-tools.config.js'))
var __DEV__ = process.env.NODE_ENV == 'dev'

if (__DEV__) {
  isomorphicPlugin = isomorphicPlugin.development()
}

module.exports = {
  context: path.resolve(__dirname),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
    filename: `[name].js` // by default, name = main
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['css', 'sass'] // It is required to use ALL both loaders and in this specific order!
      },
    ],
  },
  plugins: [
    isomorphicPlugin
  ]
}