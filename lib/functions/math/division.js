module.exports = ({ fparams, resolve }) => {
  const solvedParams = fparams.map(param => Array.isArray(param) ? resolve(param) : param)
  const [ firstParam, ...allParams ] = solvedParams
  return allParams.reduce((accumulator, current) => accumulator / current, firstParam)
}
