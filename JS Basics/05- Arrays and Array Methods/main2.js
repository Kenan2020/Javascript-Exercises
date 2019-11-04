function passed(res){
    notPass = 0;
    for(i = 0; i<arr.length; i++){
        if(arr[i]<50){
            notPass ++;
        }
    }
    return `the result: ${(notPass/res.length*100).toFixed(2)}% are not passed the test! `
}
let arr = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];
console.log(passed(arr));
