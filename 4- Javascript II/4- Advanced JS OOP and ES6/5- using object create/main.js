let animal ={
    eats : true,
    doesEat : function(){
        return this.eats
    }
}

////crate a new object using Object.create////////Object.create(must have a prototype)
//let rabbit = Object.create(animal)
/*
let rabbit = Object.create(animal, {
    longEars :{value: 2},
    jumps: {value: true}
})

let rabbit = Object.create(animal)
rabbit.logEars = 2
rabbit.jumps = true
*/
//console.log(animal.doesEat())
//console.log(rabbit)

////////recreate our person object////////
/*const person = {
    firstName: "farah",
    lastName: "yousef",
    age: 25,
    martialStatus: "single",
    /*
    greetings: function(){
        return `Hello Miss ${this.firstName} ${this.lastName}`
    },
    getMarried: function(newLastName){
        this.lastName = newLastName
    }
}
    */

const personProtos = {
    greetings: function(){
        return `Hello Miss ${this.firstName} ${this.lastName}`
    },
    getMarried: function(newLastName){
        this.lastName = newLastName
    }
}
const person = Object.create(personProtos)

person.firstName = "farah";
person.lastName = "yousef";
person.age = 25;
person.martialStatus = "single";

//person.getMarried("Nelson")
//console.log(person.greetings())
//console.log(person)
/*
const user = {
    name: "kenan",
    pass: "123456"
}
const geust = Object.create(user)//find user in proto
geust.type = "geust";
geust.auth = "read"
console.log(geust)
*/
const userProtos = {
    changePass : function(newPass){
        this.pass = newPass
    },
    changeAuth : function(newAuth){
        this.auth = newAuth
    }
}
const user = Object.create(userProtos)
user.name = "kenan"
user.pass = "123"
user.auth = "read"

user.changeAuth("write")
user.changePass("ABC")


console.log(user)

