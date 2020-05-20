let nails = ["rusty nail", "bent nail", "clean nail"]
let planks = ["splintered plank", "straight plank", "bent plank"]

function clean(item){
    //create list item and the text is item
    console.log(`${item}`)

}

function cleaningMethod(item){
    //your code
    li = document.createElement("li")
    li.innerHTML = `${item}`
    document.querySelector(".res").appendChild(li)
}

function groupAndClean(items, cleaningMethod, done){
    for ( i = 0; i < items.length; i++){
      cleaningMethod(items[i])
    }
    done()
}

groupAndClean(nails.concat(planks), cleaningMethod, function(){
    //your code
    console.log("Done !!!")

})
