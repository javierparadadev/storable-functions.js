module.exports = ({ fparams, resolve }, args) => {
  return Math.pow(
    Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0],
    Array.isArray(fparams[1]) ? resolve(fparams[1], args) : fparams[1]
  )
}
