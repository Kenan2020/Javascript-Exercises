const posts = [
    {
        title : "Post1",
        body : "This is amazing Post1"
    },
    {
        title : "Post2",
        body : "This is amazing Post2"
    }
]
//asynchronized Callback function
/*
function createPost(post){
    setTimeout(function(){
        posts.push(post)
    }, 3000)
}
function getPosts(){
    setTimeout(function(){
        let output = ""
        posts.forEach(function(item){//forEach is synchronized
            output += `
            <li>${item.body}</li>
            `
        })
        document.body.innerHTML = output
    }, 1000)
}
createPost({title:"Post3", body: "This is amazing Post3"})
getPosts()
*/
//Callback functions
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post)
        callback()
    }, 3000)
}
function getPosts(){
    setTimeout(function(){
        let output = ""
        posts.forEach(function(item){
            output += `
            <li>${item.body}</li>
            `
        })
        document.body.innerHTML = output
    }, 1000)
}
let p3= {title:"Post3", body: "This is amazing Post3"}
createPost(p3, getPosts)
