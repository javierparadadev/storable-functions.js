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
    },
    {
        token: 'array',
        f: require('./functions/data/array/array')
    },
    {
        token: 'raw',
        f: require('./functions/data/raw')
    },
    {
        token: 'if',
        f: require('./functions/logic/if')
    },
    {
        token: 'else',
        f: require('./functions/data/solve')
    },
    {
      token: 'elseif',
      f: require('./functions/logic/if')
    },
    {
      token: 'prop',
      f: require('./functions/data/object/prop')
    },
    {
      token: 'sqrt',
      f: require('./functions/math/sqrt')
    },
    {
      token: 'cbrt',
      f: require('./functions/math/cbrt')
    },
    {
      token: 'floor',
      f: require('./functions/math/floor')
    },
    {
      token: 'ceil',
      f: require('./functions/math/ceil')
    },
    {
      token: 'trunc',
      f: require('./functions/math/trunc')
    },
    {
      token: 'round',
      f: require('./functions/math/round')
    },
    {
      token: '^',
      f: require('./functions/math/pow')
    }
]
