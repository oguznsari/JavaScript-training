/*
var oguzhan = {
    name: 'Oğuzhan',
    age: 26,
    greet(person) {
        console.log("Hello " + person.name + ", my name is " + this.name)
    }
}

var dogukan = {
    name: 'Doğukan',
    age: 20
}

oguzhan.greet(dogukan)
*/

Person = class {
    constructor(name, age){
        this.name = name
        this.age = age
        this.meetups = []
    }
    greet(person) {
        console.log("Hello " + person.name + ", my name is " + this.name)
    }
    attend(meetup) {
        this.meetups.push(meetup)
        meetup.attendees.push(this)
    }
}
oguzhan = new Person('Oğuzhan', 26)
dogukan = new Person('Doğukan', 20)

console.clear()
oguzhan.greet(dogukan)
dogukan.greet(oguzhan)

Meetup = class {
    constructor(name) {
        this.name = name
        this.attendees = []
    }
    printAttendeeNames() {
        this.attendees.forEach(printName)
    }
}

printName = person => console.log(person.name, person.age)

wtmb = new Meetup('Women Techmakers Berlin')
dogukan.attend(wtmb)
oguzhan.attend(wtmb)
// console.log(oguzhan, dogukan)
//oguzhan.attend(wtmb)
//oguzhan

wtmb.printAttendeeNames()
