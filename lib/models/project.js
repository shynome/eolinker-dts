
const Sequelize = require('sequelize')
const { sequelize } = require('../db')

exports.eo_project = sequelize.define(
  'project',
  {
    projectID: { type: Sequelize.INTEGER, primaryKey: true, },
    projectType: { type: Sequelize.INTEGER, },
    projectName: { type: Sequelize.STRING, },
    projectUpdateTime: { type: Sequelize.DATE, },
    projectVersion: { type: Sequelize.STRING, },
  },
  {
    tableName: 'eo_project',
    timestamps: false,
  }
)
