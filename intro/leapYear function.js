function leapYear(array){
  let temp = [];
  array.forEach (function(year){

  if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)){
    temp.push(year);
  }
  })
    return temp
}


    

let arrayYears = [1998, 2012, 2000, 2004, 2019];
let demo = leapYear(arrayYears);
console.log(demo);
