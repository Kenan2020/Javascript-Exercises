//Define UI Variables
const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task")

//load all event listeners
loadEventListeners();

//Definig the function that load all event listeners
function loadEventListeners(){
    //Add Task event
    form.addEventListener("submit", addTask)
}

//Add Task Event Handler
function addTask(e){
    /*
        - Check if the Task Input is Empty
        - Create li element
        - Style the li: using class 
        - Create a Text Node and append to li
        - Create new link element
        - Give the link a style: using class
        - Add an icon html// class "fa fa-remove"
        - Append the link to li
        - Append the li to ul
        - Clean the task Input
    */
   if(!taskInput.value){
       alert("Add a Task Please!")
       return
   }
    const li = document.createElement("li")
    li.className = "collection-item"
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement("a")
    link.className = "delete-item secondary-content"
    link.innerHTML="<i class = 'fa fa-remove'></i>"
    li.appendChild(link)    
    taskList.appendChild(li)
    taskInput.value=""
   
    e.preventDefault()
}