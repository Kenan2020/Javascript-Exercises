function nearZero(arr){
    let pos = Infinity;
    if(arr.length >0){
        for(let i = 0; i < arr.length; i++){
            if(Math.abs(arr[i]) >= 0 && Math.abs(arr[i]) < pos){
                pos = arr[i];
            }
        }
    }else if(arr.length ==1){
        
        return pos = arr[1];

    }else{
    return "The array is empty!"
    }
    return Math.abs(pos);
}

let arr1 = [2, -1, -2, 5, -10, 7, 1];
let test1 =[]
let test2 =[1]
let test3 =[-1]
let test4 =['']


let x = nearZero(test4);
console.log(x)