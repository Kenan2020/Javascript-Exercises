const btnTry = document.getElementById("try")
btnTry.addEventListener("click", focusMethod)

inputs = document.querySelectorAll("input")

let i = 0

function focusMethod(){
    if(i > inputs.length-1){
        i = 0
    }
    inputs[i].focus()
    
        inputs.forEach(function(item, index){
            if(index == i){
                item.style.backgroundColor = "#ddd"
            }else{
                item.style.backgroundColor = ""
            }
        })
    i++
}
/*
let i = 0
const textareas = document.querySelectorAll("textarea")
let item = textaras[0]
function focusMethod(){
    item.classList.remove("bg-warning")
    item = textareas[i]
    item.classList.add("bg-warning")
    textareas[i].focus()
     i = (i>1 ? 0 : i+1)
}
*/
