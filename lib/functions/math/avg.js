const sumf = require('./sum')

module.exports = ({ fparams, resolve }) => {
  return sumf({ fparams, resolve }) / fparams.length
}
