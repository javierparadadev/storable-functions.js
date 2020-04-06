module.exports = ({ fparams, resolve }) => {
  const resolvedParams = fparams.map(fparam => Array.isArray(fparam) ? resolve(fparam) : fparam)
  const [ firstParam, ...allParams ] = resolvedParams
  return firstParam + allParams.reduce((accumulator, current) => {
    return accumulator - current
  }, 0)
}
