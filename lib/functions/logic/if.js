module.exports = ({ fparams, resolve }, args) => {
  const [ condition, branch, ...extraParams ] = fparams
  let res
  if (resolve(condition, args)) {
    res = Array.isArray(branch) ? resolve(branch, args) : branch
  } else if(extraParams.length > 0) {
    res = resolve(extraParams, args)
  }
  return res
}
