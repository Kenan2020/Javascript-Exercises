const clearBtn = document.querySelector(".clear-tasks")
const card = document.querySelector(".card")
const heading = document.querySelector("h5")
const lis = document.querySelectorAll(".collection-item")

//Click
//clearBtn.addEventListener("click", runEvent)

//Double Click
//clearBtn.addEventListener("dblclick", runEvent)

//Mouse Down
//clearBtn.addEventListener("mousedown", runEvent)

//Mouse Up
//clearBtn.addEventListener("mouseup", runEvent)

//Mouse Enter
//card.addEventListener("mouseenter", runEvent)

//Mouse Leave
//card.addEventListener("mouseleave", runEvent)

//Mouse Over
//card.addEventListener("mouseover", runEvent)

//Mouse Out
//card.addEventListener("mouseout", runEvent)

//Mouse Move
//card.addEventListener("mousemove", runEvent)

//Event Handler
/*function runEvent(e){
    console.log(`Event Type : ${e.type}`)
    heading.textContent = `MouseX:${e.offsetX} MouseY: ${e.offsetY}`
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
    e.preventDefault()
}
*/

for(let i=0; i < lis.length; i++){
    lis[i].addEventListener("click", runEvent)
    lis[i].addEventListener("dblclick", runEvent)
}
console.log(lis)

function runEvent(e){
    lis.forEach(function(item){
        if(e.type == "click"){
            item.style.background = ""
            e.target.style.background = "green"
        }else if(e.type == "dblclick"){
            e.target.style.background= ""
        }
    })
    e.preventDefault()
}

