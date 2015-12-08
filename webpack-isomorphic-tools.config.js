var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  debug: true,
  assets: {
    json: {
      extensions: ['json']
    },
    svg: {
      extensions: ['svg'],
    },
    scss: {
      extensions: ['scss'],
      path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,
      filter: WebpackIsomorphicToolsPlugin.style_loader_filter,
    },
  }
}
