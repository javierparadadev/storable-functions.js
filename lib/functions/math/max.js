module.exports = ({ fparams, resolve }, args) => {
  return Math.max(...resolve(fparams[0]))
}
