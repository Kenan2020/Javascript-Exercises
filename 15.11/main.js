/*
-------------------
M-15112019-1
Simple Pig Latin
-------------------
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
ALGORITHMS
Solution:
function pigIt(str){

 //Code here

}
Sample Tests:
pigIt('Pig latin is cool'),'igPay atinlay siay oolcay'
pigIt('This is my string'),'hisTay siay ymay tringsay'
*/
function pigIt(str){
    let re=/[a-z]/i, e="ay", tmp=[], res =[];
    arr= str.split(" ")
    arr.forEach(function(item){
      tmp.push(item.slice(0,1))
      res.push(item.substring(1))
    })
    j=0;
    for(i=0; i<res.length; i++){
    if(re.test(res[i])){
        res[i]+=tmp[j]+e;
        j++
    }else{
        res[i]+=tmp[j]
        }
    }
  return res.join(" ")
  }
  x = pigIt("Hello world !")
console.log(x)