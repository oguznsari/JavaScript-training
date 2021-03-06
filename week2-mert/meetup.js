const Chalk = require('chalk')

module.exports = Meetup = class {
    constructor(name) {
        this.name = name
        this.attendees = []
    }
    printAttendeeNames() {
        this.attendees.forEach(printName)
    }
}
printName = person => console.log(Chalk.bgGreen(person.name, person.age))