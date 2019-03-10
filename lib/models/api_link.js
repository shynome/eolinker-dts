const Sequelize = require('sequelize')
const { eo_api } = require('./api')

const { eo_api_request_param } = require('./api_request_param')
eo_api.hasMany(
  eo_api_request_param,
  { as: 'request', sourceKey: 'apiID', foreignKey: 'apiID', }
)
exports.eo_api_include_request_param_query = {
  model: eo_api_request_param,
  where: { apiID: Sequelize.col('api.apiID') },
  as: 'request',
  required: false,
}

const { eo_api_request_value } = require('./api_request_value')
eo_api_request_param.hasMany(
  eo_api_request_value,
  { as: 'paramOptionValue', sourceKey: 'paramID', foreignKey: 'paramID', }
)
exports.eo_api_include_request_value_query = {
  model: eo_api_request_value,
  where: { paramID: Sequelize.col('request.paramID') },
  as: 'paramOptionValue',
  required: false,
}

const { eo_api_result_param } = require('./api_result_param')
eo_api.hasMany(
  eo_api_result_param,
  { as: 'result', sourceKey: 'apiID', foreignKey: 'apiID', }
)
exports.eo_api_include_result_param_query = {
  model: eo_api_result_param,
  where: { apiID: Sequelize.col('api.apiID') },
  as: 'result',
  required: false,
}

const { eo_api_result_value } = require('./api_result_value')
eo_api_result_param.hasMany(
  eo_api_result_value,
  { as: 'paramOptionValue', sourceKey: 'paramID', foreignKey: 'paramID', }
)
exports.eo_api_include_result_value_query = {
  model: eo_api_result_value,
  where: { paramID: Sequelize.col('result.paramID') },
  as: 'paramOptionValue',
  required: false,
}
