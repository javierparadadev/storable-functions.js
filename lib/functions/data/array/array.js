module.exports = ({ fparams, resolve }, args) => {
  if (Array.isArray(fparams)) {
    return fparams.map(elem => Array.isArray(elem) ? resolve(elem, args) : elem)
  }
}
