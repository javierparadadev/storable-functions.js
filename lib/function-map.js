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
    },
    {
        token: 'map',
        f: require('./functions/higher-order/map')
    },
    {
        token: 'arg',
        f: require('./functions/data/arg')
    },
    {
        token: 'concat',
        f: require('./functions/data/string/concat')
    },
    {
        token: 'and',
        f: require('./functions/logic/and')
    },
    {
        token: 'or',
        f: require('./functions/logic/or')
    },
    {
        token: 'not',
        f: require('./functions/logic/not')
    },
    {
        token: '==',
        f: require('./functions/logic/equals')
    }
]
