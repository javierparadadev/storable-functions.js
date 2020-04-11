module.exports = ({ fparams, resolve }, args) => {
  return fparams.every((param) => {
    return (Array.isArray(param) ? resolve(param, args) : param)
  })
}
