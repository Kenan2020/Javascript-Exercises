/*
08.11.2019
---------------------
M.8.11.03
WeIrD StRiNg CaSe
---------------------
Instructions:
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the
same string with all even indexed characters in each word upper cased, and all odd
indexed characters in each word lower cased. The indexing just explained is zero based,
so the zero-ith index is even, therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated by
a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

ALGORITHMS - STRINGS

Solution:
function toWeirdCase(string){
 //TODO
}
Sample Tests:
toWeirdCase('This'), 'ThIs');
toWeirdCase('is'), 'Is');
toWeirdCase('This is a test'), 'ThIs Is A TeSt')
*/
function toWeirdCase(string){
    let arr = string.split(" ");
    
    for(i=0; i<arr.length; i++){
      arr[i] = arr[i].split("")
      }

    for(i=0; i<arr.length; i++){
      for(j=0; j<arr[i].length; j++){
        if(j%2==0){
          arr[i][j]= arr[i][j].toUpperCase()
        }
      }
        arr[i] = arr[i].join("")
    }
    arr = arr.join(" ")
    return (arr)
}
x = "this is a test"
y = toWeirdCase(x)
console.log(y)