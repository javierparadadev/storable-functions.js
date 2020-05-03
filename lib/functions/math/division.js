module.exports = ({ fparams, resolve }, args) => {
  const solvedParams = fparams.map(param => Array.isArray(param) ? resolve(param, args) : param)
  const [firstParam, ...allParams] = solvedParams
  return allParams.reduce((accumulator, current) => accumulator / current, firstParam)
}
