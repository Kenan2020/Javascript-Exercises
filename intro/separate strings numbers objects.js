function separate (arr){
let tmpString = [],
    tmpNumber = [],
    tmp = [];

    arr.forEach(function(item){
      if(typeof item == "string"){
      tmpString.push(item);
      }else if(typeof item == "number"){
      tmpNumber.push(item);
      }else{
        tmp.push(item);
      }
  
  })
return [tmpNumber, tmpString, tmp];
}


let arr1=[[1, "5", 10], "Safwan", 2,"Stefan", 5,"Kenan", 10, "Omar",1,2,3],
    res1 = separate(arr1);


console.log(res1);

