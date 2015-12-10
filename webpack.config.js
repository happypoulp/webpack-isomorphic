var path = require('path')
var WebpackIsoToolsPlugin = require('webpack-isomorphic-tools/plugin')
// var webpack = require('webpack')

var isomorphicPlugin = new WebpackIsoToolsPlugin(require('./webpack-isomorphic-tools.config.js'))
var __DEV__ = process.env.NODE_ENV == 'dev'

if (__DEV__) {
  isomorphicPlugin = isomorphicPlugin.development()
}

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: [
      // 'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:9099',
      './index.js',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: 'http://localhost:9099/static/',
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
        loaders: ['style', 'css', 'sass'] // It is required to use ALL loaders and in this specific order!
        // loaders: ['css', 'sass'] // It is required to use ALL loaders and in this specific order!
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    isomorphicPlugin
  ]
}