// REQUIRING a SCSS
var baseCss = require('./base.scss')
var mod1 = require('./mod-1.js')

// REQUIRING a JSON
var myJson = require('./file.json')

// REQUIRING a SVG
// console.log('require("iconfont-loader")')
// var IconFont = require('iconfont-loader');
console.log('require("./svg/icon-list.svg")')
var iconList = require('./svg/icon-list.svg')
var iconSearch = require('./svg/icon-search.svg')

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
  // console.log('IconFont:', IconFont)
  console.log('iconList:', iconList)
  console.log('iconSearch:', iconSearch)

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
