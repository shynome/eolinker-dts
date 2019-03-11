const Sequelize = require('sequelize')
const config = require('@/config')

exports.sequelize = new Sequelize(
  config.DB_DATABASE, 
  config.DB_USER, 
  config.DB_PASS, 
  { 
    host: config.DB_HOST, 
    port: Number(config.DB_PORT),
    dialect: 'mysql', 
    timezone: config.TZ,
  }
)
