const { sequelize } = require('../db')
const {
  eo_api, 
  eo_api_include_request_param_query, 
  eo_api_include_request_value_query, 
  eo_api_include_result_param_query,
  eo_api_include_result_value_query,
} = require('../models')
const dom = require('dts-dom')
const { Parse, eoType, CommonRespType, } = require('../api/parse')

async function check(){
  await sequelize.authenticate()
}

/**
 * @param {string} projectID
 */
exports.getProjectTsDefine = async (projectID)=>{
  
  await check()

  let apis = await eo_api.findAll({
    where:{ projectID: projectID, removed: 0, apiStatus: 0, },
    include: [
      {
        ...eo_api_include_request_param_query,
        include: [ eo_api_include_request_value_query, ],
      },
      {
        ...eo_api_include_result_param_query,
        include:[ eo_api_include_result_value_query, ]
      }
    ],
  })

  let m = dom.create.module('eolinker-api')
  for(let k in eoType){
    m.members.push(eoType[k])
  }
  m.members.push(CommonRespType)
  
  apis.forEach(api=>{
    m.members.push(Parse(api))
  })
  
  return m
  
}
