function nearZero(arr){
    let pos=[], neg=[];

    for (let i=0; i<arr.length; i++){
        if(arr[i]>=0){
            pos.push(arr[i])
        }else{
            neg.push(arr[i])
        }
    }
    let minPos = pos[0];
    let maxNeg = neg[0];

    for (let i=0; i<pos.length; i++){
        if(pos[i]<minPos){
            minPos = pos[i];
        }
    }

    for (let i=0; i<neg.length; i++){
        if(pos[i]<maxNeg){
            maxNeg = neg[i];
        }
    }

    return minPos
    //if(minPos>maxNeg){
      //  return maxNeg
    //}else{
      //  return minPos
    //}

}
let arr1 = [-5, 6, -10, 7, -4];



let x = nearZero(arr1);
console.log(x)