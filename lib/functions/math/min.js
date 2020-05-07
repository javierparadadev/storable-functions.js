module.exports = ({ fparams, resolve }) => {
  return Math.min(...resolve(fparams[0]))
}
