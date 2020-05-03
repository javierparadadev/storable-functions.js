module.exports = ({ fparams, resolve }, args) => {
  const resolvedParams = fparams.map(fparam => Array.isArray(fparam) ? resolve(fparam, args) : fparam)
  const [firstParam, ...allParams] = resolvedParams
  return allParams.reduce((accumulator, current) => accumulator - current, firstParam)
}
