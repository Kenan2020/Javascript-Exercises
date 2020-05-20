
function givenMeEvenArray(arr1){
  let arr2 = [];
  arr1.forEach (function(item){
  if(item%2 == 0){
    arr2.push(item);
  }
})
  return arr2
}

let num =[2, 4, 7],
    evenNum = givenMeEvenArray(num);


console.log(evenNum);
