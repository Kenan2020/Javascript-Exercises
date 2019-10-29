function removeSmallest (arr){
    let tmp = [], minArr = arr[0], index = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i] < minArr){
            minArr = arr[i];
            index = i;
        }
    }
    for(let i=0; i<arr.length; i++){
      if(i != index){
        tmp.push(arr[i])
      }
    }
    return tmp
}