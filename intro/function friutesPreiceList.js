function fruitesPreisList(arr1, arr2, index1, index2){
  let result = arr[index1] + "price is =" + arr2[index2]
  return result
}
let friutes = ["Apple", "Banana", "Mango", "Strawberry", "Pineapple"]
let preices = [50, 100, 200]
console.log(fruitesPreisList(friutes, preices, 1, 0))
