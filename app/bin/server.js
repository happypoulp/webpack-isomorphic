var path = require('path')

global.__DEV__ = process.env.NODE_ENV

var projectBasePath = path.resolve(__dirname, '..')

var WebpackIsomorphicTools = require('webpack-isomorphic-tools')

global.ISOMORPHIC_TOOLS = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools.config.js'))

ISOMORPHIC_TOOLS.development(__DEV__)
  .server(projectBasePath, function() {
    if (__DEV__) {
      require('../src/fake-server.js')
    }
    else {
      console.log('PROD SERVER NOT IMPLEMENTED')
    }
  })