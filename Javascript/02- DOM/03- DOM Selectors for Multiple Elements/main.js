/*
let val = document.getElementById("task-title")
let val = document.querySelector("#task-title")
let val = document.querySelector("h5")
*/
//document.getElementsByClassName("")

/*
const items = document.getElementsByClassName("collection-item")
//const items = document.querySelector("ul").getElementsByClassName("collection-item")
items[0].style.color ="red";
items[2].textContent = "Hello"

console.log(items[0])
*/
//document.getElementsByTagName("li")
/*let liItem = document.getElementsByTagName("li")

console.log(liItem)*/

/*let item = document.getElementsByTagName("li")

let arr=["red", "blue", "black", "#ccc", "#080", "#330"]
for(i=0; i<item.length; i++){
    item[i].textContent = arr[i];
    item[i].style.color = "#330" + i
    item[i].style.backgroundColor = "#080" + i
}
//convert HTML collection into array
item = Array.from(item);//to use array methods
item.reverse()
item.forEach(function(item, index){//li
    console.log(item)
    item.innerHTML=`<span style="color:#080">span ${index}</span>`//item.textContent = `${index} : Hello World!`
})

console.log(item)
*/
//document.querySelectorAll
//const item = document.querySelectorAll("li")//return NodeList
//console.log(item)
/*item.forEach(function(item, index){
    console.log(item)
    item.style.color = "blue"
    item.textContent =`${index} Hello`
})*/

/*item.forEach(function(item, index){
    item.innerHTML = `<a href="https://www.google.de" target="_blank">link ${index+1}</a>`
})*/

const liOdd = document.querySelectorAll("li:nth-child(odd)")
liOdd.forEach(function(item, index){
    item.style.background = "#f4f4f4"
})
const liEven = document.querySelectorAll("li:nth-child(even")
liEven.forEach(function(item, index){
    item.style.background = "#ddd"
})
console.log(liOdd)





