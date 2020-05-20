//onEvent = some javascript code

const Bulb = document.getElementById("myimage")
/*
Bulb.onmousedown = lighton
Bulb.onmouseup = lightoff

Bulb.onmouseover = lighton
Bulb.onmouseout = lightoff

//Defining the event Handlers
function lightoff(){
    Bulb.src = "imgs/bulboff.gif"
}

function lighton(){
    Bulb.src = "imgs/bulbon.gif"
}
*/
Bulb.onmousedown = lightOnOff
Bulb.onmouseup = lightOnOff

Bulb.onmouseover = lightOnOff
Bulb.onmouseout = lightOnOff

function lightOnOff(e){
    if(e.type == "mousedown" || e.type == "mouseover"){
        e.target.src ="imgs/bulbon.gif"
    }else{
        e.target.src="imgs/bulboff.gif"
    }
}

//console.log(Bulb)