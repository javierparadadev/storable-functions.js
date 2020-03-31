const { resolve } = require('../storable-functions')

module.exports = (fparams) => fparams.reduce((accumulator, current) => {
    return accumulator + (Array.isArray(current) ? resolve(current) : current)
}, 0)