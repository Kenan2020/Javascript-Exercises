let boff = document.querySelector("#boff")
//boff.addEventListener("mousedown", myFunc)
//boff.addEventListener("mouseup", myFunc)

boff.addEventListener("mouseover", myFunc)
boff.addEventListener("mouseout", myFunc)

function myFunc(e){
    if(e.type == "mouseover"){
        e.target.setAttribute("src", "imgs/bulbon.gif")// oder boff.src=""//the id.src
    }else{
        e.target.setAttribute("src", "imgs/bulboff.gif")
    }
}