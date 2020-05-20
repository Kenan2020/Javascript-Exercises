//const url = require('url');
//parsing the URL string using Legacy API
/*
const myUrl = url.parse("https://mywebsite.com:5000/hello.html?id=100&status=active&class=fbw4")
console.log(myUrl)
*/
//parsing the URL string using the WHATWG
const myUrl = new URL("https://user:pass@smywebsite.com:5000/hello.html?id=100&status=active&class=fbw4#hash")
//the URL calss is also member of the Global Object
//console.log(myUrl)
/*
const URL = require("url").URL

const myUrl = new URL("https://mywebsite.com:5000/hello.html?id=100&status=active&class=fbw4")

//Serializes URL
console.log(myUrl.toString())
console.log(myUrl)
console.log(myUrl.href)
//Host (root domain)
//console.log(typeof myUrl.hostname)
console.log(myUrl.hostname)
*/
myUrl.hostname = "kinan.de"
myUrl.username = "admin"
myUrl.password = "3fx$2yut"
console.log(myUrl)
//param object
console.log(myUrl.searchParams) //as an object written in a specific way
console.log(myUrl.search) //as a text

//loop through params
myUrl.searchParams.forEach((value, key) => console.log(`${key} : ${value}`))

myUrl.search = "?id=101&status=inactive&class=fbw4"
console.log(myUrl.search)

//WHATWG --web hypertext technology working group