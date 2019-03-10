/**
 * @param {string} envname
 * @param {boolean} [required]
 * @param {string} [defaultValue]
 */
exports.getEnv = (envname,required=false,defaultValue)=>{
  let val = process.env[envname] || defaultValue
  if(required && !val){
    throw new Error(`required env: ${envname}`)
  }
  return val
}
