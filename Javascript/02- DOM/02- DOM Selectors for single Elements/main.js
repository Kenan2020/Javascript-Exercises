//document.getElementById("")
/*console.log(document.getElementById("task-title"))

//get things from the element
console.log(document.getElementById("task-title").id)
console.log(document.getElementById("task-title").className)

const taskTitle = document.getElementById("task-title");

//Change styling
document.getElementById("task-title").style.background = "#ccc"

document.getElementById("task-title").style.color = "#333"

document.getElementById("task-title").style.padding = "5px"

//document.getElementById("task-title").style.display = "none"

//Change the content
taskTitle.textContent = "Task List"
taskTitle.innerText = "kTask"
taskTitle.innerHTML = '<span style="color:red">Task List</span>'//you can change an element
*/
//documnet.querySelector()
console.log(document.querySelector("#task-title"))//# for id

//console.log(document.querySelector(".card-title"))//. for class

console.log(document.querySelector("li"))//the first object
document.querySelector("li").style.color = "red"//("ul li")
document.querySelector("li:last-child").style.color = "blue"
document.querySelector("li:nth-child(3)").style.color = "#777"
document.querySelector("li:nth-child(4)").textContent = "Hello"//replace all the content
document.querySelector("li:nth-child(even)").style.background = "#ccc"



