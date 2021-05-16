const { deepFind } = require('deepfinder')

module.exports = ({ fparams, resolve }, args) => {
  let [path, obj] = fparams
  if (Array.isArray(obj)) {
    obj = resolve(obj, args)
  }
  return deepFind(obj, path)
}
