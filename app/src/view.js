var baseCss = require('./base.scss')
var mod1 = require('./mod-1.js')
var myJson = require('./file.json')

module.exports = function (assets) {
  console.log(assets)
  console.log(mod1.func())
  console.log('myJson', myJson)
  console.log('myCss', baseCss)
}
