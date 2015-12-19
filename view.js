var baseCss = require('./base.scss')
var mod1 = require('./mod-1.js')
var myJson = require('./file.json')

module.exports = function (assets) {

  console.log('>>> ISOMORPHIC_TOOLS.assets() =', assets)

  // Run server-side AND client-side
  console.log(mod1.func())
  console.log('myJson', myJson)
  console.log('myCss', baseCss)

  return `<h1>Webpack isomorphic tools</h1>
    <div class="edit-me">EDIT ME and see the live reload</div>
    ${mod1.html}`
}
