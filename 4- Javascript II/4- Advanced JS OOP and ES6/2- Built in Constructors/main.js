//String
const name1 = "Lana"
const name2 = new String(name1)
if(name2 === "Lana"){
    console.log("Yes")
}else{
    console.log("No")
}

console.log(name1, name2)

//Number
const num1 = 5
const num2 = new Number(5)
console.log(num1, num2)

//Boolean
const bool1 = true
const bool2 = new Boolean(true)
console.log(bool1, bool2)

//object
const person1 = {name: "kenan"}
const person2 = new Object({name: "kenan"})
console.log(person1, person2)

//arrays
const array1 = [1, 2, 3, 4]
const array2 = new Array([1, 2, 3, 4])
console.log(array1, array2)

//Regular Expression
const re1 = /\w+/
const re2 = new RegExp("\\w+")
console.log(re1, re2)


/*
let obj1 = {
    name: "Lana"
}
let obj2 = obj1
console.log(obj1.name, obj2.name)
obj1.name = "Earn"
console.log(obj1.name, obj2.name)
*/