console.log('FAKE SERVER')

var assets = null

if (__ISO_TOOLS__ !== 'false') {
  if (__DEV__) {
    ISOMORPHIC_TOOLS.refresh();
  }

  assets = ISOMORPHIC_TOOLS.assets()
}

require('./view.js')(assets)