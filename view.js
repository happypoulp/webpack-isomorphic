var mod1 = require('./mod-1.js')
var myJson = require('./file.json')
var myCss = require('./base.scss')

module.exports = function (assets) {
  if (assets) {
    console.log('>>> ISOMORPHIC_TOOLS.assets() =', assets)
  }
  else {
    console.log('NO ISOMORPHIC_TOOLS.assets provided')
  }

  // Run server-side AND client-side
  console.log(mod1.func())
  console.log('myJson', myJson)
  console.log('myCss', myCss)

  // Run client-side ONLY
  if (typeof window !== 'undefined') {
    var style = document.createElement('style')
    style.innerHTML = myCss[0][1]
    document.getElementsByTagName('head')[0].appendChild(style)
  }
}
