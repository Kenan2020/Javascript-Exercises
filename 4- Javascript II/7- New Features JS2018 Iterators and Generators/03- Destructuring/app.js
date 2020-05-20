//Destructuring Assignment
//let a, b, c
//[a, b] = [100, 200]

//Rest pattern
//[a, b, c, ...x] = [100, 200, 300, 500, 600, 700]

//({a, b, ...c} = {a: 100, b: 200, d:400, e:500})

//Array Destructuring
//const people = ["John", "Jack", "Jill"]
//const [person1, person2, person3] = people

//Parse array returned from function
/*
function getPeople(){
    return ["John", "Jack", "Jill"]
}
let person1, person2, person3
[person1, person2, person3] = getPeople()
console.log(person1, person2, person3)
*/
//object Destructuring
const person = {
    name: "John Doe",
    age: 32,
    city: "Miami",
    gender: "Male",
    sayHallo: function(){
        console.log("Hello")
    }
}
//old ES5
/*
const name = person.name,
        age = person.age,
        city = person.city
*/
//new ES6 Destructuring
const {name, age, city, sayHallo} = person
console.log(name, age, city, sayHallo)


