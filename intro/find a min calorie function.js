let dish1 = {
  name:"falafel",
  calories: 100,

};
let dish2 = {
  name:"kartofel salat",
  calories: 150,

};
let dish3 = {
  name:"green salat",
  calories: 50,

};

let dishs =[dish1, dish2, dish3]

function deit(arr){
let min = arr[0].calories; 
let dish 
for(i=0; i<arr.length; i++){
  
  if(arr[i].calories < min){
    min = arr[i].calories;
    dish = arr[i]

  }
}
return dish
}

let x = deit(dishs);
console.log("I advice your frind to have this dish ", x)


