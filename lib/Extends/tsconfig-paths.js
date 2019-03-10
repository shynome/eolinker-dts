const tsConfig = require('../tsconfig.json')
const tsConfigPath = require('tsconfig-paths')
const path = require('path')

const cleanup = tsConfigPath.register({
  baseUrl: path.join(__dirname,'../'),
  paths: tsConfig.compilerOptions.paths,
})
// cleanup()