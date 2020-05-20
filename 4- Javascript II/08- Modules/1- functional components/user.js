/*
let greeting = "Welcome back"

function hi(user) {
    return `${greeting} ${user} in Javascript Module`
}
//add export after declaration
export {hi}
*/
//add export before declaration
/*
export function sqr(num){
    return num*num
}
*/
function square(num) {
    return "I am here for making problem !!!"
}
export {
    square,
    makeElement
}
export default function sqr(num) {
    return num * num
}

function makeElement(tagName, text, background) {
    let el = document.createElement(tagName)
    el.append(text)
    el.style.background = background
    el.style.color = "#fff"
    el.style.height = "100px"
    document.body.append(el)
}

//add delete modify to users list
export function addUser(user) {
    let li = document.createElement("li")
    li.append(user)
    document.querySelector("ul").append(li)

}
export function deleteUser(user) {
    let lis = document.querySelectorAll("li")
    lis.forEach(item => {
        if (item.innerText == user) {
            item.remove()
        }
    })
}

export function modifyUser(user, nName) {
    let lis = document.querySelectorAll("li")
    lis.forEach(item => {
        if (item.innerText == user) {
            item.innerText = nName
        }
    })
}