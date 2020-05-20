// const person = {
//     name: "kenan",
//     age: 35
// }

// (function(export, require, module, __filename, __dirname){

// })//every js file is wrapped by this function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    introMe() {
        console.log(`My name is ${this.name} and I am ${this.age} years old!`);
    }
}

console.log(__dirname, __filename);

// export {person} ES6


module.exports = Person //ES5