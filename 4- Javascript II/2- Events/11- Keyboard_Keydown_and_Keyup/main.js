let text = document.querySelector(".txt")
let textarea = document.querySelector(".txtarea")
let clear = document.querySelector(".clear")
let line = new Array(50).join("-")+"\n"
let checkdown = document.querySelector("#chkdown")
let checkup = document.querySelector("#chkup")
let igcheckdown = document.querySelector("#igchkdown")
let igcheckup = document.querySelector("#igchkup")

text.onkeydown = myFunc
text.onkeyup = myFunc
clear.onclick = clearFunc

function myFunc(e){

    if(checkdown.checked){
        e.preventDefault()
    }
    
    if(e.type == "keydown" && !igcheckdown.checked){
    
    textarea.value += `type:${e.type} key:${e.key} code:${e.code} shift:${e.shiftKey} repeat:${e.repeat}\n`
     
    }else if(e.type == "keyup" && !igcheckup.checked){

    textarea.value += `type:${e.type} key:${e.key} code:${e.code} shift:${e.shiftKey} repeat:${e.repeat}\n`+line

    
    }

}

function clearFunc(){
    textarea.value=""
    text.value=""
    checkdown.checked = false
    checkup.checked = false
    igcheckdown.checked = false
    igcheckup.checked = false
    
}


