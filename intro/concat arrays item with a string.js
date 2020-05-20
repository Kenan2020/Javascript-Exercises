function concat1 (arr, str){
  let tmp=[];
  if(typeof str === "string"){
    arr.forEach(function(item){
    tmp.push(str + item);
  })
    return tmp;
  }else{
  console.log("The second parameter must be a string");
  }
}

let array1=["Safwan", "Stefan", "kenan", "Omar"],
    res= concat1(array1, "Mr. ");
console.log(res);
