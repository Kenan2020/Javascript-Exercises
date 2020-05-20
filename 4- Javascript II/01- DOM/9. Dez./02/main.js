let input = document.getElementsByTagName("input")
input[0].addEventListener("focus", myFunc)
input[0].addEventListener("blur", myFunc)

function myFunc(e){
    if(e.type == "focus"){
        e.target.style.background="yellow"
    }else{
        e.target.style.background="" 
    }
}
