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
    //DOM Load Event
    document.addEventListener("DOMContentLoaded", getTasks)
    //Add Task event
    form.addEventListener("submit", addTask)
    //Remove Task Event
    taskList.addEventListener("click", removeTask)
    //Clear all Tasks
    clearBtn.addEventListener("click", clearTasks)
    //Filter Tasks Event
    filter.addEventListener("keyup", filterTasks)
}
//Get Tasks from LS
function getTasks(){
    /*
    - Intialize tasks
    - Check if there is any tasks in LS
    - if tasks === null  then tasks = []
    - else tasks = the array from LS
    - loop in tasks array
    - for every item create list item
    - the text is the task
    */
   let tasks;
   if(localStorage.getItem("tasks") === null){
       tasks = []
   }else{
       tasks = JSON.parse(localStorage.getItem("tasks"))
   }
    tasks.forEach(function (task){
        const li = document.createElement("li")
        li.className = "collection-item"
        li.appendChild(document.createTextNode(task))
        const link = document.createElement("a")
        link.className = "delete-item secondary-content"
        link.innerHTML="<i class = 'fa fa-remove'></i>"
        li.appendChild(link)    
        taskList.appendChild(li)
    })
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

    //Store in LS
   storeTaskInLocalStorage(taskInput.value)

    taskInput.value=""
   
    e.preventDefault()
}

//store Task
function storeTaskInLocalStorage(task){
    /*
    - Initialize the Tasks Array
    - getting the Tasks Array from LS and checking if there is no Tasks yet, Define it as Empty Array
    - Else Take it ready and assign it to Tasks Array
    - Push the task to it
    - Save it back to the Local Storage
    */
    
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))

}


//Remove Task Event Handler
function removeTask(e){
    //choosing our target: class "delete-item"
    /*
    e.target.closest(".delete-item").parentElement.remove()
    or
    */
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are You sure!")){
        e.target.parentElement.parentElement.remove()

        //Remove from Local Storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
    
   /*
    const target = e.target.closest(".delete-item")
    if(target){
        target.parentElement.remove()
    }
    */
}
//Remove from LS
function removeTaskFromLocalStorage(taskItem){
    /*
    - Initialize the Tasks Array
    - Check if there is any tasks in the LS
    - if there is no Tasks: then Tasks = []
    - else Tasks = the current Array in LS
    - loop inside the Tasks Array
    - if the tasks in the task item matches with any task then remove it from the tasks array
    - after the loop finish reset the Tasks Array to the LS
    */
   let tasks
   if(localStorage.getItem("tasks") === null){
    tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))//make it array of tasks
    }

   //don't use forEach when you are changing the same array
   for(i=0; i<tasks.length; i++){
    if(tasks[i] == taskItem.textContent){
        
        tasks.splice(i, 1)
        
        localStorage.setItem("tasks", JSON.stringify(tasks))
        
        }
    }
    let deleteTasks
   if(localStorage.getItem("deleteTasks") === null){
    deleteTasks = []
    }else{
        deleteTasks = JSON.parse(localStorage.getItem("deleteTasks"))//make it array of tasks
    }

   //don't use forEach when you are changing the same array
   
   
        
        tasks.splice(i, 1)
        
        localStorage.setItem("deleteTasks", JSON.stringify(deleteTasks))
        
        
    


}
//localStorage.clear()

//clear Tasks Event Handler
function clearTasks(e){
    //faster: taskList.firstChild
    
    if(confirm("Are You sure!")){
    /*
    Array.from(document.querySelectorAll(".collection-item")).forEach(function(item){
        item.remove()
    })
    */
   while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild)
    }
  }
  localStorage.clear()
    e.preventDefault()
}
//Filter Tasks
function filterTasks(){

    let result = filter.value.toLowerCase()

    document.querySelectorAll(".collection-item").forEach(function(item){//NodeList
        if(item.innerText.toLowerCase().includes(result)){
            item.style.display = "block"
            
        }else{
            item.style.display = "none"
        }
    })
    /*
    Array.from(taskList.children).forEach(function(item){
        item.style.display = (item.textContent.toLowerCase().includes(filter.value.toLowerCase())? "block" : "none")
    })
    */
   
}