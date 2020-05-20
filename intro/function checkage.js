
function checkAge(arr){
  let tmp=[];
  for(let i=0; i< arr.length; i++){
    switch(true){
      case (arr[i].age >= 18):
      tmp.push(arr[i])
    }
  }
  return tmp
}



let x = [{name:"Amir", age:30}, {name:"Omar", age:18}, {name:"abdo", age:25}, {name:"layla", age:17}];

let y = checkAge(x);

console.log(y)
/*let p1={
  name:"Amir",
   age:30
}
let p2={
name:"Omar", age:18
}
let p ={
name:"layla", age:17
}
let x = [p1, p2, p];

let y = checkAge(x);

console.log(y)*/
