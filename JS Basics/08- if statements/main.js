/*
if(condition){
    //statements
}else if(condition){
    //statements
}else{
    //statements
}
*/
const id = 100;
/*//equal to
if(id == 100){
    console.log(true)
}else{
    console.log(false)
}
//not equal
if(id != 100){
    console.log(true)
}else{
    console.log(false)
}*/
//test if undefined
/*if(typeof id == "undefined"){
    console.log(`id is ${id}`)
}else{
    console.log(`it is defined and the value is ${id}`)
}*/
//greater or less than
/*if(id < 101){
    console.log(`${id} is less than 101`)
}else if(id > 101){
    console.log(`${id} is greater than 101`)
}else{
    console.log(`${id} is equal to 101`)
}*/
//logical operators
const name = "kenan", otherName = "Omar", age = 70, otherAge = 90;
//and &&
/*if(name === "kenan" && otherName === "Omar" || age === 70 && otherAge === 80){
    console.log(`successful information!`)
}else{
    console.log(`not success!`)
}*/
//ternary operators
//condition ? statement1 : statement2
function payLess(isFriends){
    return (isFriends ? `pay for the shisha ${2}€` : `pay for the shisha ${10}€`)
}
arr = ["safwan", "sascha", "ruth", "kenan"]
function payLess(arr, name1, name2){
    return (arr.includes(name1) ? `${name1} pay for the shisha ${2}€` :arr.includes(name2) ? `${name2} pay for the shisha ${3}€` : `others should pay for the shish< ${10}€`)
}


console.log(payLess(arr, "filiz", "kenan"))