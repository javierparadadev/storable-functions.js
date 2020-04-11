module.exports = ({ fparams, resolve }, args) => {
  return fparams.some((param) => {
    return (Array.isArray(param) ? resolve(param, args) : param)
  })
}
