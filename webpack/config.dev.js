const { distFolder } = require('./paths')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const createBaseConfig = require('./config')

module.exports = function createConfig({
  distFolder,
  rootFolder
}) {
  return webpackMerge(createBaseConfig.apply(null, arguments), {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'index.js'
    ],
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      contentBase: resolve(rootFolder, distFolder),
      publicPath: '/',
      historyApiFallback: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  })
}
