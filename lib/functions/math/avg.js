const sumf = require('./sum')

module.exports = ({ fparams, resolve }, args) => {
  const data = resolve(fparams[0])
  return sumf({
    fparams: data,
    resolve
  },
    args
  ) / data.length
}
