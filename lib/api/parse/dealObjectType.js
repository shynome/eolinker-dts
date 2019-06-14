const { eoType } = require("./eoType");
const dom = require("dts-dom");

/**
 * @type {import('./dealObjectType.type').MakeDealObjectType}
 */
exports.makeDealObjectType = ({ fields }) => {
  let rules_keys = fields.map(v => v.paramKey);
  let tmp_obj = /**@type {{ [k: string]: boolean }} */ ({});
  return function dealObjectType(rule, parentPrefixLength = 0) {
    let rule_type = eoType[rule.paramType];
    if (typeof rule_type === "undefined") {
      throw new Error(
        `出现预料外的类型: ${rule.paramType} , 返回参数键名为: ${rule.paramKey}`
      );
    }
    let field = /**@type {dom.ObjectTypeMember} */ (null);
    let field_key = rule.paramKey.slice(parentPrefixLength);
    switch (rule_type.name) {
      case "eoObject":
      case "eoArray": {
        let parentPrefixLength = rule.paramKey.length + 2;
        let keys = rules_keys
          .filter(f => f !== rule.paramKey)
          .filter(f => {
            let arr = f.slice(parentPrefixLength).split(">>");
            return f.startsWith(rule.paramKey) && arr.length === 1;
          });
        let obj = /**@type {dom.Type} */ (dom.type.any);
        if (keys.length > 0) {
          obj = dom.create.objectType(
            keys.map(f => {
              tmp_obj[f] = true;
              return dealObjectType(
                fields.filter(r => r.paramKey === f)[0],
                parentPrefixLength
              );
            })
          );
        } else {
          obj = eoType["13"];
        }
        field = dom.create.property(
          field_key,
          rule_type.name === "eoObject" ? obj : dom.create.array(obj)
        );
        break;
      }
      default:
        tmp_obj[rule.paramKey] = true;
        field = dom.create.property(field_key, rule_type);
    }
    let param = fields.filter(v => v.paramKey === rule.paramKey)[0];
    if (typeof param !== "undefined") {
      param.paramOptionValue = param.paramOptionValue.filter(v => v);
      if (param.paramNotNull) {
        field.flags = dom.DeclarationFlags.Optional;
      }
      let optionValue = "";
      if (param.paramOptionValue && param.paramOptionValue.length) {
        optionValue = param.paramOptionValue
          .filter(v => v.value)
          .map(v => {
            return `- \`${v.value}\` ${
              v.valueDescription ? `- ${v.valueDescription}` : ""
            }`;
          })
          .join("\n");
        optionValue = `可能值: \n${optionValue}`;
      }
      field.jsDocComment = [
        param.paramName,
        !!param.paramValue && `示例: \`${param.paramValue}\``,
        !!param.paramLimit && `参数限制: ${param.paramLimit}`,
        optionValue
      ]
        .filter(v => v)
        .join("    \n");
    }
    return field;
  };
};
