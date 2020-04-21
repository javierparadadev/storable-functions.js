module.exports = ({ fparams, resolve }, args) => {
  return Math.sqrt(
    Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0]
  )
}
