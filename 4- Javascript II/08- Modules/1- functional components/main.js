/*
import{hi} from "./user.js"
console.log(hi("kenan"))
*/
/*
import {sqr} from "./user.js"
console.log(sqr(2))
*/
import {square, makeElement} from "./user.js"
import squr from "./user.js"
import {addUser} from "./user.js"
import {deleteUser} from "./user.js"
import {modifyUser} from "./user.js"

console.log(squr(2))
console.log(square())
makeElement("h3", square(), "red")
addUser("kenan")
addUser("Omar")
deleteUser("kenan")
modifyUser("Omar", "Omar Alkadri")