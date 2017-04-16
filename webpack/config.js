const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function createConfig({
  distFolder,
  srcFolder,
  rootFolder
}) {
  return {
    context: resolve(rootFolder, srcFolder),
    output: {
      filename: 'bundle.js',
      path: resolve(rootFolder, distFolder),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: resolve(rootFolder, srcFolder)
        },
        {
          test: /\.css$/,
          include: resolve(rootFolder, srcFolder),
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    resolve: {
      modules: [
        resolve(rootFolder, srcFolder),
        resolve(rootFolder, 'node_modules')
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(rootFolder, 'template/index.html')
      }),
      new CleanWebpackPlugin(distFolder)
    ]
  }
}
