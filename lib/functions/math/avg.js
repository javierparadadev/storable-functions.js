const sumf = require('./sum')

module.exports = ({ fparams, resolve }, args) => {
  return sumf({ fparams, resolve }, args) / fparams.length
}
