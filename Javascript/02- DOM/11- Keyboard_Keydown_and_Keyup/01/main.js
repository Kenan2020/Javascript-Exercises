kinput.onkeydown = kinput.onkeyup = handle //kinput.onkeypress
let lastTime = Date.now()

function handle(e){
    //console.log(form.elements[e.type + "Ignore"].checked)

    if(form.elements[e.type + "Ignore"].checked){
        return
    }
    let text = e.type +
    " key = " + e.key +
    " code = " + e.code +
    (e.shiftKey ? " shiftKey" : "") +
    (e.ctrlKey ? " ctrlKey" : "") +
    (e.altKey ? " altKey" : "") +
    (e.repeat ? " (repeat)" : "") +
    "\n";
    if(area.value && Date.now() - lastTime > 250){
        area.value += new Array(80).join("-") + "\n"
    }
    lastTime = Date.now()

    area.value += text

    if(form.elements[e.type + "Stop"].checked){
        e.preventDefault()
    }

}

// the input is an object and the key of the input is the name
