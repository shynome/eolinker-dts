const Sequelize = require('sequelize')
const { sequelize } = require('../db')

exports.eo_api_result_value = sequelize.define(
  'api_result_value',
  {
    valueID: { type: Sequelize.INTEGER, primaryKey: true, },
    value: { type: Sequelize.STRING, },
    valueDescription: { type: Sequelize.STRING, },
    paramID: { type: Sequelize.INTEGER, },
  },
  {
    tableName: 'eo_api_result_value',
    timestamps: false,
  }
)
