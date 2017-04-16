const prod = require('./webpack/config.prod')
const dev = require('./webpack/config.dev')
const { distFolder, srcFolder } = require('./webpack/paths.js')

const env = process.env.ENV

const configFactories = {
  prod,
  dev
}

const configOptions = {
  distFolder,
  srcFolder,
  rootFolder: __dirname
}

const configFactory = configFactories[env] || prod

module.exports = configFactory(configOptions)
