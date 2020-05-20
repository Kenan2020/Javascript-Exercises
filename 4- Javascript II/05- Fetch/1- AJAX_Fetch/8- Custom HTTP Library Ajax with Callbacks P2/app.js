const http = new EasyHTTP
function callback(err, response){
    if(err){
        console.log(err)
        const div = document.createElement('div')
        div.appendChild(document.createTextNode(err))
        document.body.appendChild(div)
    }else{
        console.log(response)
        let data = JSON.parse(response)
        const ul = document.createElement('ul')
        for(x in data){
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(`${x} : ${data[x]}`))
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    }
}
/*
function success(err, posts){
    if(err){
        console.log(err)
        document.querySelector(".err").innerHTML = `${err}`
    }else{
        console.log(posts)
        let result = document.querySelector(".res")
        data = JSON.parse(posts)
        
        const ul = document.createElement("ul")
        for(x in data){
            const li = document.createElement("li")
            li.innerHTML = `${x}: ${data[x]}`
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
        /*
        res = Object.entries(d)
        for(x of res){
            tr = document.createElement("tr")
            tr.innerHTML = `
            <td>${x[0]}:</td>
            <td>${x[1]}</td>
            `
            result.appendChild(tr)   
            
    }
}*/
//function errFunction(err){
  //  alert(err)
//}

//Get Posts
//http.get("https://jsonplaceholder.typicode.com/posts", callback)

//get post
//http.get("https://jsonplaceholder.typicode.com/posts/1", callback)

//create Data

const data = {
    title: "custom title",
    body: "custom body"
}
/*
//send POST
http.post("https://jsonplaceholder.typicode.com/posts", data, callback)
*/
//update POST
//http.put("https://jsonplaceholder.typicode.com/posts/1", data, callback)
//delete POST
http.delete("https://jsonplaceholder.typicode.com/posts/1", callback)
