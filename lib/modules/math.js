module.exports = [
  {
    token: '+',
    f: require('../functions/math/sum')
  },
  {
    token: '-',
    f: require('../functions/math/subtraction')
  },
  {
    token: 'abs',
    f: require('../functions/math/abs')
  },
  {
    token: '*',
    f: require('../functions/math/multiplication')
  },
  {
    token: '/',
    f: require('../functions/math/division')
  },
  {
    token: 'mod',
    f: require('../functions/math/mod')
  },
  {
    token: 'avg',
    f: require('../functions/math/avg')
  },
  {
    token: 'sqrt',
    f: require('../functions/math/sqrt')
  },
  {
    token: 'cbrt',
    f: require('../functions/math/cbrt')
  },
  {
    token: 'floor',
    f: require('../functions/math/floor')
  },
  {
    token: 'ceil',
    f: require('../functions/math/ceil')
  },
  {
    token: 'trunc',
    f: require('../functions/math/trunc')
  },
  {
    token: 'round',
    f: require('../functions/math/round')
  },
  {
    token: '^',
    f: require('../functions/math/pow')
  }
]
