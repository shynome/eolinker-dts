const dom = require("dts-dom");
const { makeDealObjectType } = require("./dealObjectType");

/**
 * @typedef {import('./params.type').RequestParamValue} RequestParamValue
 * @typedef {import('./params.type').RequestParam} RequestParam
 * @param {RequestParam[]} params
 */
exports.PaseParams = params => {
  if (!params) {
    params = [];
  }

  let obj = dom.create.objectType([]);
  let dealObjectType = makeDealObjectType({
    fields: params
  });

  params
    .filter(p => !!p.paramKey)
    .filter(f => f.paramKey.split(">>").length == 1)
    .forEach(rule => {
      obj.members.push(dealObjectType(rule));
    });

  return obj;
};
