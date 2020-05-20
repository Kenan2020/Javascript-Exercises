function returnIndex (arr, text){
let pos = 0;
arr.forEach(function(item, index){ 
  if(item == text){
    pos = index;
  }
})
return(pos);
}


let clothing =["shoes", "shirts", "socks", "sweaters"];
let x = returnIndex (clothing, "shirts");
console.log (x);


