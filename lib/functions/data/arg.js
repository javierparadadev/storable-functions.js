module.exports = ({ fparams, resolve }, args) => {
  const argName = Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0]
  return args[argName]
}
