module.exports = ({ fparams, resolve }, args) => {
  return fparams.reduce((accumulator, current) => {
    return accumulator + (Array.isArray(current) ? resolve(current, args) : current)
  }, '')
}
