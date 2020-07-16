module.exports = ({ fparams, resolve }, args) => {
  return Math.hypot(
    ...fparams.map(num => Array.isArray(num) ? resolve(num, args) : num)
  )
}
