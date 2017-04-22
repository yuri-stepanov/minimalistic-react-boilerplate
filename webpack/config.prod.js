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
      new webpack.NoEmitOnErrorsPlugin(),
      // turing production mode `On` in react
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      // minimize our code
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ]
  })
}
