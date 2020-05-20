
function evenNu(arr){
  let even=[], odd=[]
  for(i=0; i< arr.length; i++){
    if(arr[i]%2==0){
      even.push(arr[i])
    } else{
    odd.push(arr[i])
    }
  }
  return {even, odd}
}



let x = [1, 10, 15, 20, 31, 22, 25];
let even= evenNu(x).even;
let odd= evenNu(x).odd;


console.log(even)
console.log(odd)
