const Sequelize = require('sequelize')
const { sequelize } = require('../db')

exports.eo_api_result_param = sequelize.define(
  'api_result_param',
  {
    paramID: { type: Sequelize.INTEGER, primaryKey: true, },
    paramName: { type: Sequelize.STRING, },
    paramKey: { type: Sequelize.STRING, },
    paramNotNull: { type: Sequelize.INTEGER, },
    apiID: { type: Sequelize.INTEGER, },
  },
  {
    tableName: 'eo_api_result_param',
    timestamps: false,
  }
)
