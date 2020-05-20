let num =[2, 4, 7],
    evenNum =[];

num.forEach(function(item){
  if(item%2 ==0){
    evenNum.push(item);
  }
})
console.log(evenNum);
