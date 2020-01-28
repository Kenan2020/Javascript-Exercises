const arr =   [1, 5, 6, 4, 9, 80, 4, 2, 1, 55]
//Spread operator ...something
//spread in arrays
console.log(Math.max(...arr))
//spread in function
function average(...numbers){
    let sum = 0
    for(i=0; i< numbers.length; i++){
        sum += numbers[i]
    }
    return sum / numbers.length
}
x = average(1, 5, 6, 4, 9, 80, 4, 2, 1, 55)
console.log(x)
//spread in objects
let obj0 = {
    firstName: "Jay",
    age: 28
}
let obj1 = {
    second: "jack",
    gender: "male"
}
let obj2 = {...obj0, ...obj1, nationality: "German"}
console.log(obj2)

//destructuring:
let ar = [10, "first string", [5, 6] , "second string"]
//let firstString = ar[1]
//let secondString = ar[2]
let [,firstString, , secondString] = ar
console.log(firstString, secondString)
//destructuring in objects
const ob = {firstName: "kenan", lastName:"mawlood", age: 35}
const {firstName, age} = ob
console.log(firstName, age)

//Rest Operators
const numbers = [1, 2, 3]//1  [2, 3]
const [fnumber, ...rNumbers] = numbers
console.log(fnumber, rNumbers)
const [...allElement] = document.querySelectorAll(".bla")