/*
----------------------------------
Local Storage vs Session Storage
----------------------------------
they are exactly the same
the only difference:
- Local Storage keep the saved data even you close the browser and you need the clear it manually.
- Session Storage doesn't keep the data when you close the browser and open it agian.
*/

//set Local Storage item
//the key and the value should be string
//localStorage.setItem("name", "kenan")
//localStorage.setItem("name", "Omar")
//localStorage.setItem("age", "25")
//set Session Storage
//sessionStorage.setItem("name", "Mr.Harris")

//remove one item from local storage
//localStorage.removeItem("name")

//get property from local storage
//const x = localStorage.getItem("name")
//const y = localStorage.getItem("age")

//clear local storage
//localStorage.clear()
//console.log(x, y)

//add multiple properties with the same key but different values

let ul = document.createElement("ul")
let divCard = document.createElement("div")

divCard.innerHTML = "<h5 id='task-title'>Tasks</h5>"
divCard.className = "card-action"
ul.className = "collection"
let mainDiv = document.querySelector("#main")

document.querySelector("form").addEventListener("submit", function(e){
    const task = document.getElementById("task").value
    
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))

    alert("task saved")
    console.log(tasks)
    location.reload(true)
    e.preventDefault()
})

let tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    let li = document.createElement("li")
    let link = document.createElement("a")

    li.className = "collection-item"
    link.className = "delete-item secondary-content"
    link.innerHTML ="<i class ='fa fa-remove'></i>"

    li.appendChild(link)
    li.appendChild(document.createTextNode(task))
    ul.appendChild(li)

    link.onclick = myFunc
});
mainDiv.appendChild(divCard)
divCard.appendChild(ul)

function myFunc(e){
    tasks.forEach(function(item, index){
        if(e.target.closest("li").innerText == item){
            tasks.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            location.reload(true)
            //console.log(tasks)
        }
        //console.log(e.target.closest("li").innerText)
})
    //console.log()
}