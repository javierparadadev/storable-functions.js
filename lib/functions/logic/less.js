module.exports = ({ fparams, resolve }, args) => {
  const value1 = Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0]
  const value2 = Array.isArray(fparams[1]) ? resolve(fparams[1], args) : fparams[1]
  return value1 < value2
}
