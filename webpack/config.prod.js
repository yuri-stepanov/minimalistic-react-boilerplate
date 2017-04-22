const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const createBaseConfig = require('./config')

module.exports = function createConfig() {
  return webpackMerge(createBaseConfig.apply(null, arguments), {
    // for production config we use only our code as entry point
    entry: './index.js',
    devtool: 'hidden-source-map',
    plugins: [
      // we will not emmit code in case of build step failed
      new webpack.NoErrorsPlugin(),
      // minimize our code
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ]
  })
}
