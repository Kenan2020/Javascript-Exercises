let arr1 =[10, 5, 100, 25, 45, 1],
    arr2 =[-5, 55, 30, 75, 80],
    res=[];

res = arr1.concat(arr2);

res = res.sort(function(x, y){
    return x-y;
})
console.log(`arr1: ${arr1}
arr2: ${arr2}
res:  ${res}`);
