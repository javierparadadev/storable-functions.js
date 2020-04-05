module.exports = ({ fparams, resolve }) => {
  const value = Array.isArray(fparams[0]) ? resolve(fparams[0]) : fparams[0]
  const mod = Array.isArray(fparams[1]) ? resolve(fparams[1]) : fparams[1]
  return value % mod
}
