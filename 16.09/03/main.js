function average(){


    console.log(arguments)
    let myMind =0
    for (let i=0; i<arguments.length; i++){
        console.log(arguments[i])
        myMind+=arguments[i]
    }
    return myMind/arguments.length
}

let x = average(5, 8, 10, 15, 20)
document.write(x)