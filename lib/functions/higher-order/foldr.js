module.exports = ({ fparams, resolve }, args) => {
  const [ argName, accumulatorName, initialValue, lambda, params ] = fparams
  const solvedParams = resolve(params, args)
  return solvedParams.reduceRight((accumulator, currentParam) => {
    args[argName] = currentParam
    args[accumulatorName] = accumulator
    const res = resolve(lambda, args)
    delete args[argName]
    delete args[accumulatorName]
    return res
  }, initialValue)
}
