//Creat some arrays
const numbers =[43, 56, 33, 23, 44, 36, 5],
      numbers2 = new Array (43, 56, 33, 23, 44, 36, 5),//old way
      fruits = ["aprecot", "Apple", "Banana", "Orange", "Pear"],
      mixed =[22, "Hello", true, undefined, null, {a:1, b:2}, new Date()],
      nonArray = {x:5, y:6};
let val;

//get array length
val = numbers.length;

//check if is array
val = Array.isArray(mixed)

//Access array elements
val = numbers[2];
val = mixed[5];

//edit into the array
numbers[2]= 100;

//find index of value
val = numbers.indexOf(100);

//mutating arrays
numbers.push(250) //add on the end
numbers.unshift(4) // add on to the front
numbers.pop()//remove item from end
numbers.shift() //remove from the front
const numbers1 =[43, 56, 33, 23, 44, 36, 5];
//val = numbers1.splice(1,3) //splice values

//slice
//val = numbers1.slice(1,3);

//reverse
//val = numbers1.reverse();

val = numbers.concat(numbers)

//sorting
val = fruits.sort()

//use "compare function"
val = numbers.sort(
    function(x, y){
        return x-y
    }
)
//join
let str = "kenan am I there Hello"
console.log(str)
let arr = str.split(" ")
arr.reverse()
str = arr.join(" ");

console.log(arr, str)

//find
function over50(num){
    return num > 50;
}
val = numbers.find(over50);//find the first result
console.log(val)

//output
//console.log(val)
