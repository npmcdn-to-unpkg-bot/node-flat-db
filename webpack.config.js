var webpack = require('webpack')
var pkg = require('./package.json')
var banner = 'flat-db v' + pkg.version

module.exports = {
  output: {
    path: './dist',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}
