/*
Write a method that returns array of all the numbers from 1 to an interger argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
Example
-----------
fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

Notes
-----------
Make sure to return array.
*/
function fizzBuzz(number) {
		return new Array(number).fill(0).map((item, index)=>{
    return (index+1)%15===0 ? "FizzBuzz" :
      (index+1)%5===0 ? "Buzz" :
      (index+1)%3===0 ? "Fizz" : 
     index+1
  })
}
