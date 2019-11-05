function compareDate (date){
    let d = new Date (date);
    let today = new Date();
    if(d.getTime() > today.getTime()){
        return `Your book to the event for the ${d} is already guaranteed!`
    }else{
        return `please enter a future date`
    }
}
let x = compareDate("2019-11-24");
console.log(x)

/*
let months = [
 'January',
 'February',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December'
];
 
let today = new Date();
 
let createEvent = function(usersDate) {
   if (usersDate > today) {
     let getDate = usersDate.getDate();
     let getYear = usersDate.getFullYear();
     let getMonth = usersDate.getMonth();
 
     console.log(`Your reservation for the ${getDate}rd ${months[getMonth]} ${getYear} is guaranteed!`);
 
   } else {
     console.log('Please put a future date!');
   }
}
 
let preferrableDate = new Date(2020, 2, 23);
let notAcceptableDate = new Date(2017, 5, 3);
 
createEvent(preferrableDate);
createEvent(notAcceptableDate);

*/
