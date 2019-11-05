let val;
//Date Constructor
const today = new Date();
let birthday = new Date("1969-03-24 07:33:05");
birthday = new Date("June 27 1969");

//Date GET Methods
val = today.getMonth();//Get the month as a number (0-11)
val = today.getDate();//Get the day as a number (1-31)
val = today.getDay();//Get the weekday as a number (0-6)
val = today.getFullYear()//Get the year as a four digit number (yyyy)
val = today.getHours()//Get the hour (0-23)
val = today.getMinutes()//Get the minute (0-59)
val = today.getSeconds()//Get the second (0-59)
val = today.getMilliseconds()//Get the millisecond (0-999)
val = today.getTime();//Get the time (milliseconds since January 1, 1970)

//Date SET Methods
birthday.setMonth(7);//Set the month (0-11)
birthday.setDate(30);//Set the day as a number (1-31)
birthday.setFullYear(1969);//Set the year (optionally month and day)
birthday.setHours(3);//Set the hour (0-23)
birthday.setMinutes(45);//Set the minutes (0-59)
birthday.setSeconds(25);//Set the seconds (0-59)






//output
console.log(birthday)