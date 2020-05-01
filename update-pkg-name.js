const fs = require('fs')
const fileName = './package.json'
const file = require(fileName)

const [ name ] = process.argv.slice(2)
file.name = name

fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
  if (err)
    return console.log(err);
});
