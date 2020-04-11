module.exports = ({ fparams, resolve }, args) => {
  const value = Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0]
  return !value
}
