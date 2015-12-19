var view = require('./view.js')

function render (html) {
  document.getElementById('root').innerHTML = html
}

var viewHTML = view(window.__ISOMORPHIC_ASSETS__)

console.log('index.js REQUIRED')

render(viewHTML)

// check if HMR is enabled
if (module.hot) {
  // accept update of dependency
  // module.hot.accept("./view.js", function () {
  //   render(require('./view.js')(window.__ISOMORPHIC_ASSETS__))
  // });

  // accept itself
  module.hot.accept()
}