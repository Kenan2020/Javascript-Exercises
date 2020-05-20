const btnTry = document.querySelector("#try")

btnTry.addEventListener("click", myFunc)

//event Handler
function myFunc(e){
    let heading = document.getElementById("myH2")
    heading.insertAdjacentHTML("afterend", "<p>My New Paragraph</p>")
    console.log(heading)

}
console.log(btnTry)