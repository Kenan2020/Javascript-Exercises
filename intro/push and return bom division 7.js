function bom(num){
  let arr=[];
  for(i=1; i<=num; i++){
    arr.push(i);
  }

  for(i=0; i<arr.length; i++){
    if(arr[i]%7 ==0){
      arr[i]="bom"
    }
  }
  return arr
};
let x=bom(22);

console.log(x)
