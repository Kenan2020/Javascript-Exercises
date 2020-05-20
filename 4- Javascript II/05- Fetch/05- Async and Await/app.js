/*  ---------------
    - 3. February -
    ---------------
    - Async/Await : special syntax to work with promises in a more comfortable fashion
    - Thw word "async" before a function
    - this means a function always returns a promise.
    - values are wrapped in a resolved promise automatically.
    - and doesn't work with arrow functions
*/

async function sampleFunc(){
    return "hello February"//it is like Promise.resolve("Hello February")
}
//head.innerHTML = sampleFunc()
console.log(sampleFunc())
sampleFunc().then(val => head.innerHTML = val)
//So, async "ensures" that the function returns a promise and "warps" it's returned value into the resolved value

/*
    - Await: there's another keyword, await, that works only inside async function.
    - the keyword await makes Javascript wait until that promise settles and returns its result.
*/
async function myTest(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!!")
        }, 2000);
    })
    let result = await promise
    alert(result) //"done!!"
}
//myTest()
/*
    - await literally makes Javascript "wait" until the promise gets executed "and then go" with the result.
    - that doesn't cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts,
      handle, events, ...etc.
*/
async function myFunc(){//async to return a result
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Feb")
        }, 2000);
    })
    const error = false
    if(!error){
        const res = await promise//wait until the promise is resolved // "to get the result"
        return res
    }else{
        await Promise.reject(new Error("Something went wrong!"))//Promise from the async
    }
}
myFunc()
.then(val => console.log(val))
.catch(err => console.log(err))

async function getUsers(){
    //await response of the fetch call
    const response = await fetch("https://api.github.com/users")

    //only proceed once its resolved
    const data = await response.json()//promise to reach the data

    //only proceed proceed once the second promise is resolved
    return data
}
getUsers()
.then(users => console.log(users))