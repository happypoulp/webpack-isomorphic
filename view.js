var baseCss = require('./base.scss')
var mod1 = require('./mod-1.js')
var myJson = require('./file.json')

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
  console.log('myCss', baseCss)

  // Run client-side ONLY
  // NOT NEEDED if using style-loader (this is exactly what style-loader does!)
  if (typeof window !== 'undefined') {
    if (baseCss[0]) {
      var style = document.createElement('style')
      style.innerHTML = baseCss[0][1]
      document.getElementsByTagName('head')[0].appendChild(style)
    }
  }
}
