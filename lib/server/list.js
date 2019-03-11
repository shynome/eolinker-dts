const list = module.exports = require('express').Router()
const { eo_project } = require('../models/project')

list.use(async (req, res) => {
  let projectList = await eo_project.findAll()
  res.render('list',{ 
    projectList:projectList.filter(p=>p.projectName!=='eolinker示例').map(p=>{
      return {
        url: `/project_dts/${p.projectID}/`,
        version: p.projectVersion,
        name: p.projectName,
        updateDate: p.projectUpdateTime.toLocaleDateString(),
        updateTime: p.projectUpdateTime.toLocaleTimeString(),
      }
    }),
  })
})

