/*
A built-in timer inside your car can count the length of your ride in minutes and you have started your ride at 00:00.

Given number of minutes n at the end of the ride, calculate the current time. Return the sum of digits that the digital timer in the format hh:mm will show at the end of the ride.
Examples
-----------
carTimer(240) ➞ 4 // 240 minutes have passed since 00:00, the current time is 04:00 - Digits sum up is 0 + 4 + 0 + 0 = 4
carTimer(808) ➞ 14
carTimer(14) ➞ 5

Notes
-----------
N/A

carTimer(1439) ➞ 19
carTimer(0) ➞ 0
carTimer(23) ➞ 5
carTimer(8) ➞ 8
*/
function carTimer(n){
  return [...(''+Math.floor(n/60)+n%60)].reduce((a,v)=>a+(+v), 0)
}
