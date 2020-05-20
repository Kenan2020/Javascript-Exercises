document.querySelector("#button").addEventListener("click", loadData)
let output = document.querySelector("#output")
//event Handler
function loadData(){
    //create XHR request object
    const xhr = new XMLHttpRequest()//constructor
    console.log(xhr)
    //open
    xhr.open("GET", "data.txt", true)
    //onload method
    xhr.onload = function(){
        console.log("The HTTP Status", this.status)
        /*
            HTTP Statuses
            ----------------
            200: "OK"
            403: "Forbidden"
            404: "Not Found"
            ...
        */
       if(this.status === 200){
           output.innerHTML = `<h1>${this.responseText}</h1>`
       }
       
    }
    xhr.onprogress = function(){
        console.log("READYSTAT: ", xhr.readyState)
        /*
            readyState Values
            ---------------------------
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
        */
    }
    xhr.onreadystatechange = function(){
        console.log("READYSTAT: ", xhr.readyState)
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText)
        }
    }
    xhr.onerror = function(){
        console.log(Object.keys(xhr))
    }
    xhr.send()
}
/*
const calculate = (operand1, operator, operand2) => {
    return (operator === "add") ? parseFloat(operand1) + parseFloat(operand2) : 
            (operator === "subtract") ? parseFloat(operand1) - parseFloat(operand2) : 
            (operator === "multiply") ? parseFloat(operand1) * parseFloat(operand2) :
            (operator === "divide") ? parseFloat(operand1) / parseFloat(operand2) :
            alert("Enter a valid operator")
}
console.log(calculate(5, "add", 10))
*/
