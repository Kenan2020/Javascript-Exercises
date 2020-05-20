const user={
    email : "muster@email.com"
}
try{
    console.log("hello!!!")
    //make a ReferenceError
    //myFunction()

    //make a TypeError
    //null.myMethod()

    //make a SyntaxError
    //eval("Hello World!!!!")
    if(!user.name){
        //throw "User has no name"
        throw new SyntaxError("User has no Name")
    }
}catch(err){
    console.log(`UserError : ${err.message}`)
}finally{
    console.log("Finally runs regardless of the result ...")
    console.log("Hello kenan")
}
