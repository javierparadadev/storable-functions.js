module.exports = ({ fparams, resolve }, args) => {
  const [argName1, argName2, lambda, params] = fparams
  const solvedParams = resolve(params, args)
  return solvedParams.sort((param2, param1) => {
    args[argName1] = param1
    args[argName2] = param2
    const res = resolve(lambda, args)
    delete args[argName1]
    delete args[argName2]
    return res
  })
}
