//getting my target
let table = document.getElementById("bagua-table")

//for saving my original TD
let editingTd

table.addEventListener("click", function(event){
    //3 possible targets
    let target = event.target.closest(".edit-cancel, .edit-ok, td")
    if(!table.contains(target)){
        return
    }
    if(target.className == "edit-cancel"){
        finishTdEdit(editingTd.elem, false)
    }else if(target.className == "edit-ok"){
        finishTdEdit(editingTd.elem, true)
    }else if(target.nodeName == "TD"){
        makeTdEditable(target)
    }
})

function finishTdEdit(td, isOk){
    if(isOk){
        td.innerHTML = td.firstChild.value
    }else{
        td.innerHTML = editingTd.data
    }
    td.classList.remove("edit-td")
    editingTd = null
}

//event Handler : currently the real event target is the td
function makeTdEditable(td){
    //let td = event.target
    editingTd = {
        elem: td,
        data: td.innerHTML
    }
    
    //td is in edit state, CSS also styles the area inside
    td.classList.add("edit-td")

    //creating my textarea
    let textArea = document.createElement("textarea")
    textArea.style.width= td.clientWidth + 'px'
    textArea.style.height = td.clientHeight + 'px'
    textArea.className = "edit-area"
    textArea.value = td.innerHTML
    td.innerHTML = ""
    td.appendChild(textArea)
    textArea.focus()
    td.insertAdjacentHTML("beforeend", "<div class='edit-controls'><button class='edit-ok'>OK</button><button class='edit-cancel'>Cancel</button></div>")
}
    




