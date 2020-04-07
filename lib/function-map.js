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
        token: 'abs',
        f: require('./functions/math/abs')
    },
    {
        token: '*',
        f: require('./functions/math/multiplication')
    },
    {
        token: '/',
        f: require('./functions/math/division')
    },
    {
        token: 'mod',
        f: require('./functions/math/mod')
    },
    {
        token: 'avg',
        f: require('./functions/math/avg')
    }
]
