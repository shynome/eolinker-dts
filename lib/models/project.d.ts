import sequelize = require('sequelize')

export const eo_project:sequelize.Model<{
  projectID: number,
  projectType: number,
  projectName: string,
  projectUpdateTime: Date,
  projectVersion: string,
}, any>
