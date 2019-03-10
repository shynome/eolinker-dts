const { getEnv } = require('@/tools')

exports.SERVER_PORT = getEnv('SERVER_PORT',false,'8081')
