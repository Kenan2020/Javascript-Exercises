function onlyStrings (arr){
let tmp = [];

    arr.forEach(function(item){
      if(typeof item == "string"){
      tmp.push(item);
      }
  })
return tmp;
}

function onlyNumbers (arr){
let tmp = [];

    arr.forEach(function(item){
      if(typeof item == "number"){
      tmp.push(item);
      }
  })
return tmp;
}



let arr1=["Safwan", "Stefan", "Kenan", "Omar",1,2,3],
    res1 = onlyNumbers(arr1);
    res2 = onlyStrings(arr1);

console.log(res1);
console.log(res2);

