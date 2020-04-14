module.exports = ({ fparams, resolve }, args) => {
  let [path, obj] = fparams
  path = path.split('.')
  if (Array.isArray(obj)) {
    obj = resolve(obj, args)
  }
  if (typeof obj !== 'object') {
    throw Error('Param must be an object.')
  }
  let value = obj
  path.forEach(subpath => {
    value = value[subpath]
  })
  return value
}
