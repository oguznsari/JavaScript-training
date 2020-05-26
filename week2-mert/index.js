/*
const Person = require('./person')
const Meetup = require('./meetup')
const Chalk = require('chalk')
const Database = require('./databse')

const oguzhan = new Person('Oğuzhan', 26)
const dogukan = new Person('Doğukan', 20)
dogukan.greet(oguzhan)

const wtmb = new Meetup('WTM Berlin')
oguzhan.attend(wtmb)
dogukan.attend(wtmb)

wtmb.printAttendeeNames()
console.log(Chalk.blue.bgYellow.bold('Chalk !!!'))

Database.save('meetup.json', wtmb)
Database.save('person.json', oguzhan)

const loadedFile = Database.load('meetup.json')
console.log(loadedFile)
/*

/*
console.log('Hello World!')

const add = (num1, num2) => num1 + num2
console.log(add(5,7))
const additionResult = add(5,7)
const multiply = (num1, num2) => num1 * num2
const multiplyResult = multiply(additionResult, 2)
console.log(multiplyResult)
*/


const Database = require('./databse')
const loadedFile = Database.load('meetup.json')
console.log(loadedFile.name)