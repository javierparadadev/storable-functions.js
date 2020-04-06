module.exports = ({ fparams, resolve }) => {
  const resolvedParams = fparams.map(fparam => Array.isArray(fparam) ? resolve(fparam) : fparam)
  const [ firstParam, ...allParams ] = resolvedParams
  return allParams.reduce((accumulator, current) => accumulator - current, firstParam)
}
