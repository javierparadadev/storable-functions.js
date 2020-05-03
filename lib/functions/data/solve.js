module.exports = ({ fparams, resolve }, args) => {
  const [operation] = fparams
  return Array.isArray(operation) ? resolve(operation, args) : operation
}
