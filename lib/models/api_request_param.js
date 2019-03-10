const Sequelize = require('sequelize')
const { sequelize } = require('../db')

exports.eo_api_request_param = sequelize.define(
  'api_request_param',
  {
    paramID: { type: Sequelize.INTEGER, primaryKey: true, },
    paramName: { type: Sequelize.STRING, },
    paramKey: { type: Sequelize.STRING, },
    paramValue: { type: Sequelize.STRING, },
    paramType: { type: Sequelize.STRING, },
    paramLimit: { type: Sequelize.STRING, },
    paramNotNull: { type: Sequelize.INTEGER, },
    apiID: { type: Sequelize.INTEGER, },
  },
  {
    tableName: 'eo_api_request_param',
    timestamps: false,
  }
)
