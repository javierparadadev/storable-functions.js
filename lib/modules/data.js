module.exports = [
  {
    token: 'arg',
    f: require('../functions/data/arg')
  },
  {
    token: 'concat',
    f: require('../functions/data/string/concat')
  },
  {
    token: 'array',
    f: require('../functions/data/array/array')
  },
  {
    token: 'raw',
    f: require('../functions/data/raw')
  },
  {
    token: 'prop',
    f: require('../functions/data/object/prop')
  }
]
