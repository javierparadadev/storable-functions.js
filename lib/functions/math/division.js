module.exports = ({ fparams, resolve }) => fparams.reduce((accumulator, current) => {
  return accumulator / (Array.isArray(current) ? resolve(current) : current)
}, 0)
