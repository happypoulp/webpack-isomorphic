var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')

const compiler = webpack(webpackConfig)
const PORT = 9099

new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  // hot: true,
  // noInfo: true,
  // stats: {color: true},
  // quiet: true,
  // watchOptions: {
  //   poll: true
  // }
}).listen(PORT, '0.0.0.0', function(err) {
  if (err) {
    console.log(err)
  }
  console.log(`webpack-dev-server listening on http://0.0.0.0:${PORT}`)
})