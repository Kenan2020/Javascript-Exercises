 /* 13 Jan. 2020 */

let animal = {
    kind: "Cat",
    sound: "meau",
    legs: 4,
    tail: true,
    numOfLegs: function(){
        return this.legs
    }
}
const person = {
    firstName: "Merry",
    lastName: "Christmas",
    birthdate: new Date("1965-10-9"),//transform birthdate into date-object
    calculateAge: function(){

        const diff = Date.now() - this.birthdate.getTime()
        //now and getTime() are (in ms)
        //diff is the age in ms
        const ageDate = new Date(diff) //Date.now() return ms starting from 1970
        return Math.abs(ageDate.getUTCFullYear() - 1970)

    }
}
/*
console.log(animal.numOfLegs())
let bird = animal
console.log(bird.numOfLegs())
animal = null
console.log(bird.numOfLegs())
*/
//console.log(person["calculateAge"]())
//console.log(this)
//person constructor(function to biuld up an object)
function Person(name, dob){
    this.myName = name;
    this.dob = new Date(dob)
    this.calAge = function(){
        const diff = Date.now() - this.birthdate.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}
function Animal(kind, legs){
    this.animalKind = kind;
    this.animalLegs = legs
    this.calLegs = function(){
        return this.animalLegs
    }
    this.changeKind = function(newKind){
        this.animalKind = newKind
    }
}
/*
const trainer1 = new Person("kenan", "1987-8-15")
const trainer2 = new Person("Omar", "1975-7-25")
const myDate = new Date("")
*/
const animal1 = new Animal("cat", 4)

//console.log(trainer1, trainer2)
animal1.changeKind("dog")
console.log(animal1.animalKind)
