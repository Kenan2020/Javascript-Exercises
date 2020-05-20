document.getElementById("button1").addEventListener("click", getText)
document.getElementById("button2").addEventListener("click", getJson)
document.getElementById("button3").addEventListener("click", getApi)
//console.log(window.fetch)
//get local text file data
function getText(){
    fetch("local.txt")//fetch create a promise
    .then(res =>{//res = resolve
        return res.text()//return the full object of response (called chain promise)
    })
    .then(data =>{//return the data from the response
        console.log(data)
        document.getElementById("output").innerHTML = data
    })
    /*
        the promiseStatus will stay "resolved" even if there is an Error because we are getting from LOCAL DATA file,
        only SERVER can change automaticaly the promiseStatus into "rejected" when there is an Error
    */
    .catch(err =>{
        console.log(err)
    })
}
//Get local JSON file data
function getJson(){
    fetch("local.json")
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        //data = JSON.parse(data) -- we don't need to parse the data because fetch do this
        console.log(data)
        let output = ""
        data.forEach(item => {
            output += `
            <li>${item.title}</li>
            `
        })
        document.getElementById("output").innerHTML = output
    })
    /*
        the promiseStatus will stay "resolved" even if there is an Error because we are getting from LOCAL DATA file,
        only SERVER can change automaticaly the promiseStatus into "rejected" when there is an Error
    */
    .catch(err =>{
        console.log(err)
    })
}
//Get data from API -- https://api.github.com/users
function getApi(){
    fetch("https://api.github.com/users")
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        //data = JSON.parse(data) -- we don't need to parse the data because fetch do this
        console.log(data)
        let output = ""
        data.forEach(item => {
            output += `
            <li>${item.login}</li>
            `
        })
        document.getElementById("output").innerHTML = output
    })
    /*
        only SERVER can change automaticaly the promiseStatus into "rejected" when there is an Error
    */
    .catch(err =>{
        console.log(err)
    })
}