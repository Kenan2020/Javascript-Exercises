/* 25.11.2019
-----------------------------
REPLACE ELEMENT
-----------------------------
create element
*/
const newHeading = document.createElement("h2")//the type is object

//add id
newHeading.id = "task-title"

//new text Node
newHeading.appendChild(document.createTextNode("Easy Beasy"))

//get the old heading
const oldHeading = document.getElementById("task-title")

//parent
const cardAction = document.querySelector(".card-action")//taskTitle.parentElement
// or const parentElement = oldHeading.parentElement

//replace
cardAction.replaceChild(newHeading, oldHeading)

//REMOVE ELEMENT
//---------1
const lis = document.querySelectorAll("li")
const list = document.querySelector("ul")

//remove list item
lis[0].remove();
//lis[1].remove();

/*for(let i=0; i<lis.length; i++){
    if(lis[i].innerText =="done"){
        lis[i].remove()
    }

}*/


let arr1 = list.children
for(i=0; i<arr1.length ; i++){
    if(arr1[i].innerText == "done"){
        list.removeChild(arr1[i])
    }
}
//remove child element
//-------------2
//list.removeChild(lis[2])
/*
const li2 = list.children[0]
list.removeChild(li2)
*/

//classes & attributes
const firstLi = document.querySelector("li:first-child")
const link = firstLi.children[0]//return elements

let val
//classes
val = link.className
val = link.classList//DOM tokenlist
val = link.classList[0]
link.classList.add("test")
link.classList.remove("test")
val = link

//attributes
val = link.getAttribute("href")//get the value
val = link.setAttribute("href", "http://google.com")
/*
let liss = document.querySelectorAll("li")
for(i = 0; i <= liss.length ; i++){
    if(liss[i].innerText == "done!"){
        liss[i].children[0].setAttribute("href", "https://digitalcareerinstitute.org/")
    }
}
*/
link.setAttribute("title", "DCI")
val = link.getAttribute("title")
val = link.hasAttribute("title")
link.removeAttribute("title")
val = link.hasAttribute("title")




console.log(val)