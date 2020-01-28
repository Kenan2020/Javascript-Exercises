const http = new EasyHTTP
function success(posts){
    console.log(posts)
}
function errFunction(err){
    alert(err)
}

//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", success, errFunction)
