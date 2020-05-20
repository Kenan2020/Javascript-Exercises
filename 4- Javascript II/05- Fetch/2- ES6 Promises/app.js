
//let promise = new Promise(function(resolve, reject){
    /*
        executor (the producing code "the singer give his result")
        the function is executed automatically when the promise is contructed
    */
  //  setTimeout(() => resolve("done"), 1000)
    //setTimeout(() => reject(new Error("Oooooh!!!")), 1000)
//})
//console.log(promise, typeof promise)
//resolve runs the first function in .then
//promise.then(result => alert(result),
  //          error => alert(error)
  //)

  const posts = [{
      title: "post1",
      body: "this is post1"
  },{
    title: "post2",
    body: "this is post2"
    }
]
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false
            if(!error){
                resolve()
            }else{
                reject("Error : something went wrong!!!!")
            }
        }, 2000);
    })
}
function getPosts(){
    setTimeout(() => {
        let output = ""
        posts.forEach(item => output += `<li>${item.title}</li>`)
        document.body.innerHTML = output
    }, 1000);
}

createPost({title: "post3", body: "this is post3"}).then(getPosts).catch(err => console.log(err))//then for resolve catch for reject
/* or
createPost({title: "post3", body: "this is post3"}).then(getPosts, err => console.log(err))
*/