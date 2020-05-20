function separate (arr){
let tmpString = [],
    tmpNumber = [];

    arr.forEach(function(item){
      if(typeof item == "string"){
      tmpString.push(item);
      }else{
      tmpNumber.push(item);
      }
  
  })
return [tmpNumber, tmpString];
}





let arr1=[1, "Safwan", 2,"Stefan", 5,"Kenan", 10, "Omar",1,2,3],
    res1 = separate(arr1);


console.log(res1);


