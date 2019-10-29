//var, let, const
//Examples:
//declare a variable with var
var name="Johe Doe";
console.log(name);
//declare a variable with let
let email="address@domain.suffix";
console.log(email);
//re aasign it
name="kenan";
email="k@gmail.com";
console.log(name, email);
//var G & L Scope
function show(){
    var num=5;
    console.log(num);
}
var num = 9;
show();
console.log(num);
{
    var num = 7;
    console.log(num);
}
console.log(num)
//let & const G & L scope
function print(){
    let number = 107;
    console.log(number);
}
{
    let number = 112;
    console.log(number);
}
let number = 109;
print();
//Init - declaring a variable without giving it a value
//this is allowed  only using var or let
let someThing;
console.log(typeof someThing);
//variable name can consist of numbers, letters, _, $
//can not start with numbers
//recommended camelCase names
let firstName = "Ali ";
let secondName = "Olli";
let fullName = firstName + secondName;
console.log(fullName)
//const
const name1="Johe";
console.log(name1);
//can NOT reAssign a new Value
//Can Not init .... const x;
//exceptions to const
//Objects and Arrays can be mutated
//Object Example:
const person = {
    name: "Ray",
    age: 23
}
console.log(person);
person.name="Jay";
person.age = 25;
console.log(person)
//Array Example:
const arr=[1, 2, 3, 4, 5];
arr.push("Added Value");
console.log(arr)
arr[3]="changed Value";
console.log(arr)

//but Not arr = [44, 55]
function greeting (greetWord, name){
    return `${greetWord} ${name}`
}

const greetingMe = greeting("Hi", "Me");
console.log(greetingMe)

function findPhrase(text, phrase){
    let count = 0;
    text = text.split(" ");
   
    for (let i=0; i<text.length; i++){
      if(text[i].includes(phrase)){
        count ++;
      }
    }
 
 return count;
 }
let text1 = "The Rabbit was jumbing all the time with another Rabbit";
let phrase1 = "Rabbit";
const num1 = findPhrase(text1, phrase1);
console.log(num1)