
const dom = require('dts-dom')
const { PaseResult } = require('./PaseResult')
const { PaseParams } = require('./PaseParams')

/**
 * @param {object} obj 
 */
function Parse(obj) {
  
  const api = dom.create.interface('API',dom.DeclarationFlags.ExportDefault)

  // let headers = dom.create.objectType([])
  let params = PaseParams(obj.request)
  let resp = PaseResult(JSON.parse(obj.mockRule),obj.result)
  
  let interf = dom.create.property(
    obj.apiURI,
    dom.create.objectType([
      // dom.create.property('headers',headers),
      dom.create.property('params',params),
      dom.create.property('resp',resp),
    ])
  )
  interf.jsDocComment = obj.apiName

  api.members.push(interf)
  
  return api

}

exports.Parse = Parse
