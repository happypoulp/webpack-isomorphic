var path = require('path')

global.__DEV__ = true

if (process.env.ISO_TOOLS !== 'false') {
  var projectBasePath = path.resolve(__dirname, '..')

  // https://github.com/halt-hammerzeit/webpack-isomorphic-tools
  var WebpackIsomorphicTools = require('webpack-isomorphic-tools')
  global.ISOMORPHIC_TOOLS = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools.config.js'))
    .development(__DEV__)
    .server(projectBasePath, function() {
      if (__DEV__) {
        require('../fake-server.js')
      }
      else {
        console.log('PROD SERVER NOT IMPLEMENTED')
      }
    })
}
else {
  require('../fake-server.js')
}