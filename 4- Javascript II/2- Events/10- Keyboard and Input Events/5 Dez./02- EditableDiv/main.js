/*let view = document.getElementById("view")

view.addEventListener("click", runFocus)

function runFocus(){
    
    let area = document.createElement("textarea")
    area.style.width = view.clientWidth + 'px'
    area.style.height = view.clientHeight + 'px'
    area.value = view.innerHTML
   
    view.replaceWith(area)

    area.classList.add("brd")
    view.innerHTML = area.value
    
    area.focus()
    area.addEventListener("blur", runBlur)

    function runBlur(){
        area.replaceWith(view)
        view.innerHTML = area.value
    }
}
*/

let area = null;//Global scope
let view = document.getElementById("view")
view.addEventListener("click", editStart)

function editStart(){
    area = document.createElement("textarea")
    area.className = "edit"
    area.value = view.innerHTML
    area.addEventListener("keydown", function(event){
        if(event.key == "Enter"){
            this.blur()
        }
    })
    area.addEventListener("blur", function(){
        editDone();
    })
    view.replaceWith(area)
    area.focus()//the focus should come at the end
}
function editDone(){
    view.innerHTML = area.value
    area.replaceWith(view)
}
