const http = new EasyHTTP
res = document.querySelector(".res")
//Get Users
http.get("https://api.github.com/users/Kenan2020")
.then(val => {console.log(val)
    let img = document.createElement("img")
    let p = document.createElement("p")
    
    p.innerHTML = `<span>id : ${val.id}</span> / Login Name : ${val.login}`
    img.src = val.avatar_url
    res.appendChild(img)
    res.appendChild(p)

    }
)

.catch(err => console.log(err))

//Create Users
const user = {
    name : "kenan",
    username : "user1",
    email : "muster@muster.de"
}

//post user
http.post("https://jsonplaceholder.typicode.com/users", user)
.then(val => console.log(val))
.catch(err => console.log(err))

//Update single User on Server
http.put("https://jsonplaceholder.typicode.com/users/1", user)
.then(val => console.log(val))
.catch(err => console.log(err))

//Delete User
http.delete("https://jsonplaceholder.typicode.com/users/1")
.then(val => console.log(val))
.catch(err => console.log(err))