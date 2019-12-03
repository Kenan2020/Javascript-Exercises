const calc = document.querySelector("#calc")
/*calc.addEventListener("click", myFunc)
function myFunc(){
    let str = "5 + 6"
    calc.insertAdjacentHTML("afterend", `<p style="color:red; background-color:yellow; width: 100px; height:50px">${str} = ${eval(str)}</p>`)
}*/
n1 = document.querySelector("#n1").value
n2 = document.querySelector("#n2").value
select = document.querySelector("select")

select.addEventListener("change", runEvent)

function runEvent(e){
    switch(e.target.value){
        case "+":
            select.insertAdjacentHTML("afterend", `<p>${parseInt(n1)+parseInt(n2)}</p>`)
            break;
        case "*":
            select.insertAdjacentHTML("afterend", `<p>${parseInt(n1)*parseInt(n2)}</p>`)
            break;
        case "/":
            select.insertAdjacentHTML("afterend", `<p>${parseInt(n1)/parseInt(n2)}</p>`)
            break;
        case "-":
            select.insertAdjacentHTML("afterend", `<p>${parseInt(n1)-parseInt(n2)}</p>`)
            break;

    }
}

    
   





