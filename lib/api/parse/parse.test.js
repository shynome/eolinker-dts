// 后续补上测试数据
// @ts-nocheck

const { Parse } = require('./parse')
const dom = require('dts-dom')
const { eoType } = require('./eoType')

var obj = require('./z.json')

const m = dom.create.module('eolinker-api')
for(let k in eoType){
  m.members.push(eoType[k])
}
m.members.push(Parse(obj))

console.log(dom.emit(m))
