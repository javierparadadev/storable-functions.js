module.exports = ({ fparams, resolve }, args) => {
  return Math.round(
    Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0]
  )
}
