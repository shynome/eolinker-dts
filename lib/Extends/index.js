// 对 npm 进行扩展或增强

require('./tsconfig-paths')

// @ts-ignore
// 捕捉 express async middleware 函数中的错误
require('express-async-errors')

// load .env
require('dotenv').config()
