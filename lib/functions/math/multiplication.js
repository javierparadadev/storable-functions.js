module.exports = ({ fparams, resolve }, args) => fparams.reduce((accumulator, current) => {
  return accumulator * (Array.isArray(current) ? resolve(current, args) : current)
}, 1)
