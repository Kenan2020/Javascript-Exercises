//Event Bubbling
let sPan = document.querySelector(".card-title")
let div = document.querySelector(".card-content")
let sDiv = document.querySelector(".card")
let tDiv = document.querySelector(".col")

let li = document.querySelectorAll(".collection-item")



//console.log(sPan, div, sDiv, tDiv)

//console.log(cardAction)

Array.from(li)[0].closest("div").addEventListener("click", function(){
    Array.from(li)[0].closest("div").style.background = "red"
})
Array.from(li).forEach(function(item, index){
    console.log(item.closest("div"))
    item.addEventListener("click", function(){
        Array.from(li).forEach(function(l, i){
            if(index == i){
                l.style.background = "blue"
            }else{
                l.style.background = ""
            }
        })
        
    })
})




// document.querySelector(".card-title").addEventListener("click", function(){
//     console.log("child")
// })
// document.querySelector(".card-content").addEventListener("click", function(){
//     console.log("parent")
// })
// document.querySelector(".card").addEventListener("click", function(){
//     console.log("grand parent")
// })
// document.querySelector(".col").addEventListener("click", function(){
//     console.log("greater grand parent")
// })
// cardAction.addEventListener("click", function(e){
//     t = e.target.closest(".collection", ".collection-item")
    
//     if(cardAction.include(".collection")){
//         e.target.style.background="#080"
//     }else if(cardAction.contains("collection-item")){
//         e.target.style.background ="#ccc"
//     }
    
    
// })