const map = require('./function-map')

const resolve = (fbody) => {
    const [ ftoken, ...fparams ] = fbody
    const functionTuple = map.find(entry => entry.token === ftoken)
    if(functionTuple) {
        const { path } = functionTuple
        const f = require(path)
        return f(fparams)
    } else {
        throw Error('Undefined function found.')
    }
}

module.exports = {
    resolve
}