module.exports = ({ fparams, resolve}, args) => {
  const [ argName, accumulatorName, lambda, accumulatorInitialVal, ...params ] = fparams
  return params.reduceRight((accumulator, param) => {
    args[accumulatorName] = accumulator
    args[argName] = param
    const res = resolve(lambda, args)
    delete args[accumulatorName]
    delete args[argName]
    return res
  }, accumulatorInitialVal)
}
