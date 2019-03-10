const Sequelize = require('sequelize')
const { sequelize } = require('../db')

exports.eo_api = sequelize.define(
  'api',
  {
    apiID: { type: Sequelize.INTEGER, primaryKey: true, },
    apiName: { type: Sequelize.STRING, },
    apiURI: { type: Sequelize.STRING, },
    apiProtocol: { type: Sequelize.INTEGER, },
    apiFailureMock: { type: Sequelize.STRING, },
    apiSuccessMock: { type: Sequelize.STRING, },
    apiRequestType: { type: Sequelize.INTEGER, },
    apiSuccessMockType: { type: Sequelize.INTEGER, },
    apiFailureMockType: { type: Sequelize.INTEGER, },
    apiSuccessStatusCode: { type: Sequelize.STRING, },
    apiFailureStatusCode: { type: Sequelize.STRING, },
    apiStatus: { type: Sequelize.INTEGER, },
    apiUpdateTime: { type: Sequelize.DATE, },
    groupID: { type: Sequelize.INTEGER, },
    projectID: { type: Sequelize.INTEGER, },
    removed: { type: Sequelize.INTEGER, },
    mockRule: { type: Sequelize.STRING, },
    mockResult: { type: Sequelize.STRING, },
    mockConfig: { type: Sequelize.STRING, },
  },
  {
    tableName: 'eo_api',
    timestamps: false,
  }
)
