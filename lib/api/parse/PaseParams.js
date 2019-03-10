const dom = require('dts-dom')
const { eoType } = require('./eoType')


/**
 * @typedef {Object} RequestParamValue
 * @property {string} value
 * @property {string} valueDescription
 */

/**
 * @typedef {Object} RequestParam
 * @property {string} paramName
 * @property {string} paramKey
 * @property {string} paramValue
 * @property {string} paramType
 * @property {string} paramLimit
 * @property {number} paramNotNull
 * @property {RequestParamValue[]} paramOptionValue
 */

/**
 * @param {RequestParam[]} params
 */
exports.PaseParams = (params)=>{

  if(!params){
    params = []
  }
  
  let members = params.filter(p=>!!p.paramKey).map((param)=>{

    let param_type = eoType[param.paramType]

    if (typeof param_type === 'undefined'){
      throw new Error(`parse request params fail, because type can't find. param key is ${param.paramKey}, param type is ${param.paramType}`)
    }
    
    let prop = dom.create.property(param.paramKey, param_type)
    let optionValue = ''
    if(param.paramOptionValue && param.paramOptionValue.length){
      optionValue = param.paramOptionValue.filter(v=>v.value).map(v=>{
        return `- \`${v.value}\` ${v.valueDescription?`- ${v.valueDescription}`:''}`
      }).join('\n')
      optionValue = `可选值: \n${optionValue}\n`
    }
    prop.jsDocComment = [
      param.paramName,
      !!param.paramValue && `示例: \`${param.paramValue}\``,
      !!param.paramLimit && `参数限制: ${param.paramLimit}`,
      optionValue,
    ].filter(v=>v).join('    \n')
    if(!param.paramNotNull){
      prop.flags = dom.DeclarationFlags.Optional
    }
    return prop
  })
  return dom.create.objectType(members)
}
