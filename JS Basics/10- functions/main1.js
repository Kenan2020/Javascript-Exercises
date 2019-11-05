function sq (arr){
    arr.forEach(function(item, index){
        arr[index] = item * item
    })

}
let x = [2, 10, 25, 12, 13]
sq(x)
console.log(x)