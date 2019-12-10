const form = document.querySelector("form")
const taskInput = document.getElementById("task")
const heading = document.querySelector("h5")
const select = document.querySelector("select")

//clear input
taskInput.value = ""

//Submit
//form.addEventListener("submit", runEvent)

//keydown
//taskInput.addEventListener("keydown", runEvent)

//Keypress
//taskInput.addEventListener("keypress", runEvent)

//Focus
//taskInput.addEventListener("focus", runEvent)

//Blur
//taskInput.addEventListener("blur", runEvent)

//Change
select.addEventListener("change", runEvent)


//Event Handler
function runEvent(e){
    //e.preventDefault();
    //console.log(`Event Type: ${e.type} Value: ${e.target.value}`)
    console.log(`Event Key: ${e.key}`)
    //heading.innerText = e.target.value
}
