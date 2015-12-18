var path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: `[name].js` // by default, name = main
  },
  plugins: [
    function()
    {
        this.plugin("done", function(stats)
        {
          console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
          console.log(JSON.stringify(stats.toJson(), null, 2))
          console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        })
    }
  ]
}