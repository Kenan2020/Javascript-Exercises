const http = new EasyHTTP
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
            */
        
    }
    
    
}
//function errFunction(err){
  //  alert(err)
//}

//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", success)

//get post
http.get("https://jsonplaceholder.typicode.com/posts/1", success)
