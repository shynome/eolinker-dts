const dom = require('dts-dom')
const { eoType } = require('./eoType')
const { makeDealObjectType } = require('./dealObjectType')

/**
 * @typedef {import('./params.type').RequestParamValue} RequestParamValue
 * @typedef {import('./params.type').RequestParam} RequestParam
 * @param {RequestParam[]} params
 */
exports.PaseParams = (params) => {

  if (!params) {
    params = []
  }

  let obj = dom.create.objectType([])
  let dealObjectType = makeDealObjectType({
    tmp_obj: {},
    result_params: params,
    result_rules: params,
    rules_keys: params.map(v=>v.paramKey),
  })

  params
    .filter(p => !!p.paramKey)
    .filter(f => f.paramKey.split('>>').length == 1)
    .forEach(rule => {
      obj.members.push(dealObjectType(rule))
    })

  return obj
}
