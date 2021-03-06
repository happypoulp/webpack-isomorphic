var path = require('path')

global.__DEV__ = process.env.NODE_ENV
global.__ISO_TOOLS__ = process.env.ISO_TOOLS

var doRunServer = true

if (__DEV__) {
  console.log('******* been here')
  if (!require('piping')({
      hook: true,
      // ignore: /(\/\.|~$|\.json|\.scss$)/i
    })) {
    console.log('******* done that')
    doRunServer = false
  }
}

if (doRunServer) {
  console.log('******* RUN!!')
  runServer()
}

function runServer() {
  var projectBasePath = path.resolve(__dirname, '..')

  var WebpackIsomorphicTools = require('webpack-isomorphic-tools')

  global.ISOMORPHIC_TOOLS = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools.config.js'))

  ISOMORPHIC_TOOLS.development(__DEV__)
    .server(projectBasePath, function() {
      if (__DEV__) {
        require('../fake-server.js')
      }
      else {
        console.log('PROD SERVER NOT IMPLEMENTED')
      }
    })
}
