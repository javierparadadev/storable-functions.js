module.exports = ({ fparams, resolve}, args) => {
  const [ argName, lambda, ...params ] = fparams
  return params.filter(param => {
    args[argName] = param
    const res = resolve(lambda, args)
    delete args[argName]
    return res
  })
}
