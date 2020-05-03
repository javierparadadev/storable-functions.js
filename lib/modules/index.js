const flat = array => {
  if (array.length == 0)
    return array
  else if (Array.isArray(array[0]))
    return flat(array[0]).concat(flat(array.slice(1)))
  else
    return [array[0]].concat(flat(array.slice(1)))
}

module.exports = flat([
  require('./data'),
  require('./higher-order'),
  require('./logic'),
  require('./math')
])
