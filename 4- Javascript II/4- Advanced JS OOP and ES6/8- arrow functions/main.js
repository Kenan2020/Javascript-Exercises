/*
function sum(a, b){
    return a+b
}
or
const sum = function(a, b){
    return a+b 
}
*/
/*
let sum = (a, b) => a+b
let duplicate = n => n*2
//let pow =(x, n) => Math.pow(x, n)
let pow = (x, n) =>{
    if(x ==0) return 1
    let result = x
    for(i=1; i<n; i++) result *= x
    return result
}
let sayHi = () => console.log("Hi")
sayHi()
let res = sum(150, 2025)
res = duplicate(8)
res = pow(5, 2)
console.log(res)
*/
/*
let sum = (operand1, operand2) => operand1 + operand2
let multi = (operand1, operand2) => operand1 * operand2
let divid = (operand1, operand2) => operand1 / operand2
let minus = (operand1, operand2) => operand1 - operand2
*/
let fruits = ["orange", "berry", "banana", "kiwi", "avocado"]
//console.log(fruits.map(item => item == "banana" ? item : ""))
//console.log(fruits.map(fruit => fruit.length))
console.log(fruits.map(item => {if(item =="banana")return item
else return ""}))
let people = ["kumar", "harris", "asmmari", "navide", "jijish", "julian"]
console.log(people.map(person => person == "julian" ? "German Name" : "Indian Name"))