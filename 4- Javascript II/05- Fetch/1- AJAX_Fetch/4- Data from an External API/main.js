document.querySelector(".get-jokes").addEventListener("click", getJokes)

function getJokes(e){
    const number = document.querySelector("input[type='number']").value
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true)//Application-Programming-Interface
    xhr.onload = function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText)
            //console.log(response.value.length)
            let output = ""
            if(response.type === "success"){
                response.value.forEach(function(item){
                output += `
                <li>${item.joke}</li>
                `
                })
            }else{
                output += `<li>Something went wrong!</li>`
            }
            
            document.querySelector(".jokes").innerHTML = output
            console.log(response)
        }
    }

    xhr.send()

    e.preventDefault()
}