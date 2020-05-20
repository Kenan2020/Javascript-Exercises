function leapYear(array){
  let arr = [];
  array.forEach (function(item){

  if((item % 4 === 0 && item % 100 !== 0) || (item % 100 === 0 && item % 400 === 0)){
    arr.push(item);
  }
  })
    return arr
}


    

let arrayYears = [1998, 2012, 2000, 2004, 2019];
let demo = leapYear(arrayYears);
console.log(demo);
