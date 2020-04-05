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
        f: require('./functions/math/multiplicacion')
    },
    {
        token: '/',
        f: require('./functions/math/division')
    },
    {
        token: '%',
        f: require('./functions/math/mod')
    }
]
