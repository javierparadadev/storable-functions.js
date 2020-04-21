module.exports = ({ fparams, resolve }, args) => {
  return Math.cbrt(
    Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0]
  )
}
