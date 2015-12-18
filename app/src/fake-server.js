console.log('FAKE SERVER')

if (__DEV__) {
  ISOMORPHIC_TOOLS.refresh();
}

require('./view.js')(ISOMORPHIC_TOOLS.assets())