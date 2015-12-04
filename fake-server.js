console.log('FAKE SERVER')

if (__ISO_TOOLS__ !== 'false') {
  if (__DEV__) {
    ISOMORPHIC_TOOLS.refresh();
  }

  console.log(ISOMORPHIC_TOOLS.assets())
}

require('./index.js')