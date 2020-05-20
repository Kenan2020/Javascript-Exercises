//object extra infos
let person = {

}
person.age = 45
person["firstname"] = "kenan"
let key = "lastname"
let value = "ahmad"
person[key] = value
person.age = 25
console.log(person)

//MAPS = key-value pairs - can use ANY type as a key or value
const map1 = new Map()
//Map is a collection of keyed data items, just like Object. But the main difference is that Map allows keys of any type
/**
 * new Map() : creates the map
 * map.set(key, value) - stores the value by the key
 * map.get(key) - returns the value stored by the key, "undefined" if key doesn't exist in map
 * map.has(key) - returns true if the key exists and false otherwise
 * map.delete(key) - removes the value by the key
 * map.clear() - removes everything from the map
 * map.size - returns the current element count
 */
console.log(map1.size)

//Set keys
const key1 = "something",
        key2 = {},
        key3 = function(){}

//set map values by the keys
map1.set(key1, "Value of key1")
map1.set(key2, "Value of key2")
map1.set(key3, "Value of key3")
console.log(map1.size)
//get value by key
console.log(map1.get(key1))
//Iterating MAPs
//Loop using for ... of
console.log(map1)
for(let [key, value] of map1){
    console.log(`${key} = ${value}`)
}
//iterate keys only
for(let key of map1.keys()){
    console.log(key)
}
//iterate values only
for(let value of map1.values()){
    console.log(value)
}
//Loops with forEach
map1.forEach((value, key) =>{
    console.log(`${key} = ${value}`)
})
//Convert to Arrays
//create an array of key/value pairs
const keyValArr = Array.from(map1)
console.log(keyValArr)

//create an array of keys 
const keysArr = Array.from(map1.keys())
console.log(keysArr)

//create an array of values
const valuesArr = Array.from(map1.values())
console.log(valuesArr)
