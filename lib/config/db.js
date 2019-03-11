const { getEnv } = require('@/tools')

exports.DB_HOST = getEnv('DB_HOST',true,'127.0.0.1')
exports.DB_PORT = getEnv('DB_PORT',true,'3306')
exports.DB_DATABASE = getEnv('DB_DATABASE',true)
exports.DB_USER = getEnv('DB_USER',true,exports.DB_DATABASE)
exports.DB_PASS = getEnv('DB_PASS',true)
exports.TZ = getEnv('TZ',false,'Asia/Shanghai')
