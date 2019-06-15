const dom = require('dts-dom')

let objectType = dom.create.objectType([
  dom.create.indexSignature('k','string',dom.type.any),
])

/**@type { {[k:string]:dom.TypeAliasDeclaration} } */
const eoType = exports.eoType = {
  "0": dom.create.alias('eoString', dom.type.string, dom.DeclarationFlags.Export), //"string",
  "1": dom.create.alias('eoFile', dom.type.string, dom.DeclarationFlags.Export), //"file",
  "2": dom.create.alias('eoJson', objectType, dom.DeclarationFlags.Export), //"json",
  "3": dom.create.alias('eoInt', dom.type.number, dom.DeclarationFlags.Export), //"int",
  "4": dom.create.alias('eoFloat', dom.type.number, dom.DeclarationFlags.Export), //"float",
  "5": dom.create.alias('eoDouble', dom.type.number, dom.DeclarationFlags.Export), //"double",
  "6": dom.create.alias('eoDate', dom.type.any, dom.DeclarationFlags.Export), //"date",
  "7": dom.create.alias('eoDatetime', dom.type.any, dom.DeclarationFlags.Export), //"datetime",
  "8": dom.create.alias('eoBoolean', dom.type.boolean, dom.DeclarationFlags.Export), //"boolean",
  "9": dom.create.alias('eoByte', dom.type.any, dom.DeclarationFlags.Export), //"byte",
  "10": dom.create.alias('eoShort', dom.type.string, dom.DeclarationFlags.Export), //"short",
  "11": dom.create.alias('eoLong', dom.type.string, dom.DeclarationFlags.Export), //"long",
  "12": dom.create.alias('eoArray', dom.type.array(dom.type.any), dom.DeclarationFlags.Export), //"array",
  "13": dom.create.alias('eoObject', objectType, dom.DeclarationFlags.Export), //"object",
  "14": dom.create.alias('eoNumber', dom.type.number, dom.DeclarationFlags.Export), //"number",
}

exports.CommonRespType = (()=>{
  let t = dom.create.interface('CommonResp')
  let c = dom.create.property('c',eoType[14])
  c.jsDocComment = '操作状态（0=成功 1=失败)'
  let m = dom.create.property('m',eoType[0])
  m.jsDocComment = '消息提示'
  t.members.push(c,m)
  return t
})()

exports.RequestMethodType = ['POST','GET','PUT','DELETE','HEAD','OPTIONS','PATCH'].map(s=>dom.type.stringLiteral(s))
