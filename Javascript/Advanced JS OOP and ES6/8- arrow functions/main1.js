table = document.querySelector(".table")
result = document.querySelector("#res")
task = document.querySelector("#task")
let tmp =[]
let myfunc = e => {
    target = e.target.closest("td")
    if(result.value == "" && (target.innerText =="*" || target.innerText =="/" || target.innerText =="+")){
        return
    }else if(result.value =="-" && target.innerText =="-"){
        return
    }else if(result.value.includes(".") && target.innerText =="."){
        return
    }else if(target.innerText =="AC"){
        result.value = ""
        task.value = "0"
        tmp =[]
        return
    }
    switch (target.innerText){
        case "*":
            tmp.push(result.value)
            tmp.push(target.innerText)
            task.value = tmp.join("")
            result.value =""
            break;
        case "/":
            tmp.push(result.value)
            tmp.push(target.innerText)
            task.value = tmp.join("")
            result.value =""
            break;
        case "+":
            tmp.push(result.value)
            tmp.push(target.innerText)
            task.value = tmp.join("")
            result.value =""
            break;
        case "-":
            tmp.push(result.value)
            tmp.push(target.innerText)
            task.value = tmp.join("")
            result.value =""
            break;
        case "=":
            tmp.push(result.value)
            let s = tmp.join("")
            task.value = tmp.join("")
            result.value= `${eval(s)}`
            tmp=[]
            break;
    }
    result.value += target.innerText.replace(/[+|*|\-|/|=]/, "")
}
table.addEventListener("click", myfunc)