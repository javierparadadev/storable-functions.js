const { resolve } = require('../storable-functions')

module.exports = (fparams) => {
    let [ path, obj ] = fparams
    obj = Array.isArray(obj) ? resolve(obj) : obj
    path = rawPath.split('.')
    if (typeof obj !== 'object') {
        throw Error('Param must be an object.')
    }
    let value = obj
    path.forEach(subpath => {
        value = obj[subpath]
    })
    return value
}