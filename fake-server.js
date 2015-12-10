console.log('FAKE SERVER')
var http = require('http')

var assets = null

if (__ISO_TOOLS__ !== 'false') {
  if (__DEV__) {
    ISOMORPHIC_TOOLS.refresh();
  }

  assets = ISOMORPHIC_TOOLS.assets()
}

var server = http.createServer(function(req, res) {
  var viewContent = require('./view.js')(assets)
  var html = `<!DOCTYPE html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <link href="/public/favicon.ico" rel="shortcut icon" type="image/ico" />
    </head>
    <body>
      <div id="app-wrapper">${viewContent}</div>
      <script type="text/javascript" src="http://localhost:9099/static/main.js"></script>
    </body>
  </html>`

  res.write(html)
  res.end()
})

var port = '1234'

server.listen(port)

console.log('Server', `Server is listening on http://127.0.0.1:${1234}`)