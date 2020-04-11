module.exports = ({ fparams }) => {
  let [path, obj] = fparams
  path = rawPath.split('.')
  if (typeof obj !== 'object') {
    throw Error('Param must be an object.')
  }
  let value = obj
  path.forEach(subpath => {
    value = value[subpath]
  })
  return value
}
