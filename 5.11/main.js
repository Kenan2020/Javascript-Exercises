/*05.11.2019
--------------------
2 Is it a weekend?
--------------------
Create a function that accepts a specific date given as an argument and returns
a message if the day of the specific date is a weekend day or not.
You may want to use the getDay function to have access to which day it is.
This returns a number from 0 to 6.
0 Sunday,
1 is Monday,
6 is for Saturday etc.
You may find this info useful if you want to check what day a specific date is.

 */
function isWeekEnd(date){
    let d = new Date(date);
    
    return (d.getDay() == 0 || d.getDay() == 6) ? `${d} is a weekend day` : `${d} is a workday`
    
}
let x = "2019-11-02"
y = isWeekEnd(x)
console.log(y)
