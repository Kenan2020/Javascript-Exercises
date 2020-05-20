//Create Element
const li = document.createElement("li")
const link = document.createElement("a")

//add class
li.className = "collection-item"
link.className = "delete-item secondary-content"

//add id
li.id = "new-id"

//add attribute
li.setAttribute("title", "new item")

//create text node and append
li.appendChild(document.createTextNode("item created by js"))

//add icon html
link.innerHTML ="<i class = 'fa fa-remove'></i>"
li.appendChild(link)

//Append li as child to ul
document.querySelector("ul.collection").appendChild(li)

let x =["task1", "task2", "task3", "task4", "task5"]
for(i=0; i<x.length; i++){
    const li = document.createElement("li")
    const link = document.createElement("a")
    li.id="newitem" + i
    document.querySelector("ul.collection").appendChild(li)
    li.className = "collection-item"
    link.className = "delete-item secondary-content"
    li.appendChild(document.createTextNode(x[i]))
    link.innerHTML ="<i class = 'fa fa-remove'></i>"
    li.appendChild(link)
}