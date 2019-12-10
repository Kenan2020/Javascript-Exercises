let btn1 = document.getElementById("focus")
let btn2 = document.getElementById("blur")
let input = document.getElementById("inp")
let result = document.getElementById("res")

btn1.addEventListener("click", runFunc)
btn2.addEventListener("click", runFunc)

function runFunc(e){
    if(e.target.value == "focus"){
        input.focus()
        result.innerHTML = `on ${e.target.value}!`
        result.style.textTransform = "capitalize"
    }else{
        input.blur()
        result.innerHTML = `on ${e.target.value}!`
        result.style.textTransform = "capitalize"
    }

}
/*
const btnF = document.getelementById("focus")
const btnB = document.getElementById("blur")
const input = document.getElementById("userName")
const div = document.getElementById("status")

btnF.addEventListener("click", do_focus)
btnB.addEventListener("click", do_blur)
input.addEventListener("focus", logf)
input.addEventListener("blur", logb)

function do_focus(){
    document.getElementById("userName").focus()
}
function do_blur(){
    document.getElementById("userName").blur()
}
function logf(){
    div.innerHTML = "on Focus"
}
function logb(){
    div.innerHTML = "on Blur"
}


*/