const Sequelize = require('sequelize')
const { sequelize } = require('../db')

exports.eo_api_request_value = sequelize.define(
  'api_request_value',
  {
    valueID: { type: Sequelize.INTEGER, primaryKey: true, },
    value: { type: Sequelize.STRING, },
    valueDescription: { type: Sequelize.STRING, },
    paramID: { type: Sequelize.INTEGER, },
  },
  {
    tableName: 'eo_api_request_value',
    timestamps: false,
  }
)
