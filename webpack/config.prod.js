const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const createBaseConfig = require('./config')

module.exports = function createConfig() {
  return webpackMerge(createBaseConfig.apply(null, arguments), {
    entry: './index.js',
    devtool: 'hidden-source-map',
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: false })
    ]
  })
}
