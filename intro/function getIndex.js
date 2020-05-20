function getIndex(arr, name){
pos = 0;
arr.forEach(function(item, index){
  if(item == name){
  pos = index;
  }
});
return pos
}

let names = ["Amir", "Peter", "Omer", "kenan"];
let y = getIndex(names, "kenan")
console.log(y)

