let ul = document.createElement("ul")
let form = document.querySelector("#task-form")


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
    e.preventDefault()
})

let tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(task))
    ul.appendChild(li)
  
});
form.appendChild(ul)