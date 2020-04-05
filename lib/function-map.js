module.exports = [
    {
        token: '+',
        f: require('./functions/math/sum')
    },
    {
      token: '-',
      f: require('./functions/math/subtraction')
    },
    {
        token: 'prop',
        f: require('./functions/prop')
    },
    {
        token: 'abs',
        f: require('./functions/math/abs')
    }
]
