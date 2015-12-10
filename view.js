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
  console.log('ddd sdlcidufh')

  return `<h1>Webpack isomorphic tools</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>`
}
