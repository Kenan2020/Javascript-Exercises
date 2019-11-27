document.querySelector("#btn").addEventListener("click", myFunc)

function myFunc(e){

    x = document.getElementById("show").innerText
    if(x){
        x = ""
    }else{
        x = "this is a test"
    }

console.log(x)

    e.preventDefault()
}