var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  debug: true,
  assets: {
    json: {
      extensions: ['json']
    },
    svg: {
      extensions: ['svg'],
      parser: function(module, options) {
        console.log(module.source)
        console.log(options)
        console.log('##################################################')
        console.log(global.CODEPTS)
        console.log(global.STYLES)
        console.log('####################### END ########################')
        /*
          PATCH node_modules/iconfont-loader/IconFontPlugin.js with:

          stream.on("end", function () {
              var module = modules.filter(function (module) {
                  return module.rawRequest === "iconfont-loader";
              })[0];

              global.CODEPTS = plugin.codepoints
              global.STYLES = plugin.styles

              compilation.rebuildModule(module, callback);
          });
        */
        var newSource = 'global.__FONT_ICON_PLUGIN_CODEPOINTS__=global.CODEPTS;' +
          'global.__FONT_ICON_PLUGIN_STYLES__=global.STYLES;' +
          module.source
        return newSource
      }
    },
    scss: {
      extensions: ['scss'],
      path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,
      filter: WebpackIsomorphicToolsPlugin.style_loader_filter,
    },
  }
}
