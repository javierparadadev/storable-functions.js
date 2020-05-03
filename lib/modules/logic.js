module.exports = [
  {
    token: 'and',
    f: require('../functions/logic/and')
  },
  {
    token: 'or',
    f: require('../functions/logic/or')
  },
  {
    token: 'not',
    f: require('../functions/logic/not')
  },
  {
    token: '==',
    f: require('../functions/logic/equals')
  },
  {
    token: 'if',
    f: require('../functions/logic/if')
  },
  {
    token: 'else',
    f: require('../functions/data/solve')
  },
  {
    token: 'elseif',
    f: require('../functions/logic/if')
  }
]
