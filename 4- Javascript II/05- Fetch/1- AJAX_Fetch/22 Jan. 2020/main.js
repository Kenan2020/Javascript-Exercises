let username = document.querySelector("#username")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let res = document.querySelector(".res")

submit.onclick = testInput

function testInput(){
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "users.json", true)
    xhr.onload = function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText)
            let output = "check your username or your password"
            for(x of response){
                //console.log(x.userName)
                if(x.userName == username.value && x.password == password.value){
                    output = `
                    <li>ID: ${x.id}</li>
                    <li>first name: ${x.firstName}</li>
                    <li>last name: ${x.lastName}</li>
                    <li>phone: ${x.phone}</li>
                    <li>E-mail: ${x.email}</li>
                    <li>job title: ${x.jobTitle}</li>
                    `
                }else{
                    output
                }
            }
            document.querySelector(".res").innerHTML = output
            
        }
    }
    xhr.send()
}