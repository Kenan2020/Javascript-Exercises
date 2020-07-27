//@ts-check
const {
    add,
    substract,
    divide,
    multiply
} = require("./calculator")

/**
 * @file index.js is the root file for this example app
 * @author kenan
 * @see <a href="#">demo</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'kenan'

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89]

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: "Hello",
}

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: "kenan",
    age: 35,
    isActive: true
}

/**
 * Class to create a person object
 */
class Person {
    /**
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name
        /**
         * @property {string|number} age Persons age
         */
        this.age = personInfo.age
    }
    /**
     * @property {Function} greet A greeting with the name and age
     * @returns {void}
     */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }
}
/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
    name: "kinan",
    age: 35
})
//console.log(person1.greet())
console.log(add(20, 30))