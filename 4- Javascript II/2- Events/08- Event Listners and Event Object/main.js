/*document.querySelector(".clear-tasks").addEventListener("click", function(e){
    console.log("Hello !!!!!")
    e.preventDefault()
})*/
/*
document.querySelector(".clear-tasks").addEventListener("click", myFunc)

function myFunc(e){
    //console.log("Clicked!!!")
    let val;
    val = e;
    //event target element
    /*val = e.target
    val = e.target.id
    val = e.target.className
    val = e.target.classList
    val.remove("black")
    val.add("red")
    */
   // event type
  /* val = e.type
    //Timestamp
    val = e.timeStamp

    //coords event relative to the window
    val = e.clientY //Vertical window relative
    val = e.clientX

// coords event relative to the element
    val = e.offsetY
    val = e.offsetX

    console.log(val)
    e.preventDefault()
}
*/

let x = document.querySelectorAll(".fa")

for(i=0; i<x.length; i++){
    x[i].addEventListener("click", function(e){
        e.target.parentElement.parentElement.remove()
    })
}






//output
//console.log(x)