const btnTry = document.getElementById("try")
btnTry.addEventListener("click", myFunc)

function myFunc(){
    let myNodeName = document.getElementById("myP").nodeName//tag name
    document.getElementById("demo").innerHTML = myNodeName
}
