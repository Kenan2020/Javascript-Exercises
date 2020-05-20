function calculate(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            sum += arr[i]

        }else if (typeof arr[i] === "object"){
            for(let j=0; j<arr[i].length; j++){
                sum += arr[i][j]
            }
        }
    }
    return sum 
}

let array = [5, 4, 8, 7, 5, 2, 3, [0, 3, 2, 1, 4, 5, 6]]
let sum = calculate(array)
console.log(sum)