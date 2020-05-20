function fruitesPreiceList(arr1, arr2, index1, index2){
  //let result = arr1[index1] + " price is = " + arr2[index2]
  let result;

  if(arr1[index1] === "Apple"){
result = arr1[index1] + " " + arr2[index2]
  }else {
result = "I don't know"  }
  return result
}
let friutes = ["Apple", "Banana", "Mango", "Strawberry", "Pineapple"]
let preices = [50, 100, 200]
console.log(fruitesPreiceList(friutes, preices, 0, 1))
