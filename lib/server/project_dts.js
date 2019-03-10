const project_dts = module.exports = require('express').Router()
const dom = require('dts-dom')
const api = require('../api')
const path = require('path')
const fse = require('fs-extra')
const { eo_project } = require('../models')

const tmpdir = path.join(process.cwd(),'./.project-dts-tmp/')

void function init(){
  fse.removeSync(tmpdir)
  fse.mkdirpSync(tmpdir)
}()

const projectTmpGenLock = /**@type {{[k:string]:boolean}} */({})

project_dts.use('/:projectID/',async (req,res)=>{

  let projectID = req.params.projectID

  if(isNaN(projectID)){
    res.status(400).end(`projectID 不为数字`)
    return
  }

  let project = await eo_project.find({ where: { projectID } })

  if(!project){
    res.status(404).end('无法找到该项目')
    return 
  }

  if(projectTmpGenLock[project.projectID]){
    res.status(503).end('服务端正忙着生成该项目的缓存文件')
    return 
  }

  res.contentType('text/typescript')

  let tmpfile = path.join(tmpdir,`./${project.projectID}.${project.projectUpdateTime.getTime()}.d.ts`)
  
  let err 
  
  // 不存在缓存文件的话生成缓存文件
  if(!(await fse.pathExists(tmpfile))){
    projectTmpGenLock[project.projectID] = true

    try{
      let m = await api.getProjectTsDefine(projectID)
      let content = m.members.reduce((t,member)=>{
        t += dom.emit(member)
        return t
      },'')
      await fse.writeFile(tmpfile,content)
    }catch(e){
      err = e
    }

    projectTmpGenLock[project.projectID] = false
  }
  if(err){
    throw err
  }
  
  res.sendFile(tmpfile)

})
