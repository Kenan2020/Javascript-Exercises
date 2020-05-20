const btnTry = document.getElementById("try")
btnTry.addEventListener("click", myFunc)

function myFunc(){
    let span = document.getElementById("mySpan")
    let div = document.getElementById("myDiv").contains(span)

    document.getElementById("demo").innerHTML = div
}