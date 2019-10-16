let re;
re = /hello/;
re = /hello/i; //i = case insensitive // g = Global match // exec() = return result in an array or null

console.log(re);
console.log(re.source);

/*const result = re.exec("Hello world"); 1- exec
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);*/

//2- test() - returns true or false
/*const result = re.test("Hello");
console.log(result);*/

//3- match() - returns result as an array or null // string function
/*const str = "Hello There!";
const result = str.match(re);
console.log(result);*/

//4- search() - returns index of the first match, if not found it returns -1 // string function
/*const str = " there!!! Hello";
const result = str.search(re);
console.log(result);*/

//5- replace() - returns a new string where the pattern is replaced by the new word provided. // string function
const str = "Hello There!";
const newStr = str.replace(re, "Hi");
console.log(newStr);