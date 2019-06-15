const dom = require("dts-dom");
const { eoType, CommonRespType } = require("./eoType");
const { makeDealObjectType } = require("./dealObjectType");

/**
 * @typedef {import('./result.type').ResultParamValue} ResultParamValue
 * @typedef {import('./result.type').ResultParam} ResultParam
 * @typedef {import('./result.type').ResultRule} ResultRule
 * @param {ResultRule[]} result_rules
 * @param {ResultParam[]} [result_params]
 */
const PaseResult = (result_rules, result_params = []) => {
  if (!result_rules) {
    result_rules = [];
  }
  let fields = result_rules
    .filter(r => r.paramKey !== "")
    .map(v => {
      let extra = result_params.filter(r => r.paramKey === v.paramKey)[0];
      return /**@type {import('./dealObjectType.type').CommonParams} */ ({
        ...v,
        ...extra,
      });
    });

  let obj = dom.create.objectType([]);

  const dealObjectType = makeDealObjectType({ fields: fields });

  let d = fields.filter(r => r.paramKey === "d")[0];

  if (typeof d !== "undefined") {
    return dom.create.intersection([
      CommonRespType,
      dom.create.objectType([dealObjectType(d)])
    ]);
  } else {
    fields
      .filter(f => f.paramKey.split(">>").length == 1)
      .forEach(rule => {
        obj.members.push(dealObjectType(rule));
      });
  }

  return obj;
};

exports.PaseResult = PaseResult;
