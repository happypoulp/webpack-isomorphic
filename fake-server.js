console.log('FAKE SERVER')

if (process.env.ISO_TOOLS !== 'false') {
  if (__DEV__) {
    ISOMORPHIC_TOOLS.refresh();
  }

  console.log(ISOMORPHIC_TOOLS.assets())
}

require('./index.js')