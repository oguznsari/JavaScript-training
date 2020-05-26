const fs = require('fs')

const save = function(filename, data) {
    //console.log(data)
    fs.writeFileSync(filename, JSON.stringify(data))
}

const load = function(filename) {
    //console.log(data)
    return JSON.parse(fs.readFileSync(filename, 'utf-8'))
}

module.exports =  { save , load }