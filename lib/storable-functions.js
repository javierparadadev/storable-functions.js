const modules = require('./modules')

var resolvef

const resolve = (fbody, args) => {
  if (!args) {
    args = {}
  }
  const [ftoken, ...fparams] = fbody
  const functionTuple = modules.find(entry => entry.token === ftoken)
  if (functionTuple) {
    const { f } = functionTuple
    return f({ fparams, resolve: resolvef }, args)
  } else {
    throw Error('Undefined function found.')
  }
}

resolvef = resolve

module.exports = {
  resolve
}
