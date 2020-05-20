function calculate(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            sum += arr[i]

        }else if (typeof arr[i] === "object"){
            for(let j=0; j<arr[i].length; j++){
                if(typeof arr[j]==="number"){
                    sum += arr[j]
                } else if(typeof arr[j]==="object"){
                    for(let k=0; k<arr[j].length; k++){
                        sum += arr[j][k]
                    }
                }
            }
        }
    }
    return sum 
}

let arr1 = [5, 4, 8, 7, 5, 2, 3, [0, 3, [2], 1, 4, 5, 6]]
let sum1 = calculate(arr1)
console.log(sum1)

//////////////////////////////////////////////////////////////////////////////////////
function reCalculate(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            sum += arr[i]

        }else if (typeof arr[i] === "object"){
            sum += reCalculate(arr[i])
            }
        }
        return sum 

        }

let array = [5, 4, 8, [7], [5], 2, 3, [0, 3, 2, [2, 5, 6]], 1, 4, 5, 6]
let sum = reCalculate(array)
console.log(sum)
