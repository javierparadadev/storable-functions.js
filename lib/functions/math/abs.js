module.exports = ({ fparams, resolve }) => {
  const value = Array.isArray(fparams[0]) ? resolve(fparams[0]) : fparams[0]
  return value < 0 ? value * (-1) : value
}
