/*
06.11.2019
---------------------------------
L-8 Pay the employees today!
---------------------------------
Imagine that you are currently the big boss of a company. It is the first day
of the month and you want to pay your employees. In the company now work 72 employees.
The cashier/balance of your company now is 100.000$.
You will use these to pay the salaries to your workers.
Analytically your company is comprised of:
50 workers with ops and general duites: each earns 1.000$.
10 web developers:
      4 of them are Frontend Developers: each earns 1.500$
      4 of them are Backend Developers: each earns 2.000$
      2 of them are FullStack developers: each earns 3.000$
5 Project managers: each earns 4.000$
5 DevOps Engineers: each earns 5.000$
2 Data Scientists:
      1 Data Analyst: each earns 7.500$
      1 Machine Learning Engineer: each earns 10.000$
 
Suppose you want to start paying them one by one and pay as many as you can.
But there is an order. Everyone has an identifying number.
The Data Scientist come first (from 1 to 2).
Then the web devs (3 to 4, Full stack come first), (5 to 8, here come the Backend Devs),
then the frontend Devs.
Then the normal workers.
Then DevOps Engineers
Project Managers last.
Print a message to console after the program to know exactly how many people have
not received their payment yet, in order to keep track on the amount of people who
await for the salaries. Additionally print how much money has left to your balance
after the payment.
Estimated time: 30 Minutes.

 */
function payment(arr){
    let balance = 100000, i = 0, j = 0, nemp = 72;
    arr.sort(function(a, b){return a.adv - b.adv});
    while(i<arr.length && balance >= 0){
      while(j < arr[i].count && balance >= 0 && balance > arr[i].sal){
        balance -= arr[i].sal 
        nemp = nemp -1
        j++
      }
      j = 0;
      i++;
    }
      return `Unpaid Employees /${nemp}/ and the remain balance is /${balance}/$`
    }
 


let workers =[{id:1, pos: "data analyst", sal: 7500, count:1, adv:1},
              {id:2, pos: "machine learning", sal: 10000, count:1, adv:2},
              {id:3, pos: "Full stack", sal: 3000, count:2, adv:3},
              {id:4, pos: "backend", sal: 2000, count:4, adv:4},
              {id:5, pos: "frontend", sal: 1500, count:4, adv:5},
              {id:6, pos: "workers", sal: 1000, count:50, adv:6},
              {id:7, pos: "Dev Engineer", sal: 5000, count:5, adv:7},
              {id:8, pos: "manager", sal: 4000, count:5, adv:8}]

console.log(payment(workers))

/*
let cashier = 100000;
let nextPayment = 7500;
let employees = 72;
 
for ( employeeId = 1; cashier - nextPayment >= 0; employeeId++) {
 
 if (employeeId === 1) {
   cashier -= 7500;
   nextPayment = 10000;
 } else if (employeeId === 2) {
   cashier -= 10000;
   nextPayment = 3000;
 } else if (employeeId <= 4) {
   cashier -= 3000;
   employeeId === 4 ? nextPayment = 2000 : nextPayment = 3000;
 } else if (employeeId <= 8) {
   cashier -= 2000;
   employeeId === 8 ? nextPayment = 1500 : nextPayment = 2000;
 } else if (employeeId <= 12) {
   cashier -= 1500;
   employeeId === 12 ? nextPayment = 1000 : nextPayment = 1500;
 } else if (employeeId <= 62) {
   cashier -= 1000;
   employeeId === 62 ? nextPayment = 5000 : nextPayment = 1000;
 } else if (employeeId <= 67) {
   cashier -= 5000;
   employeeId === 67 ? nextPayment = 4000 : nextPayment = 5000;
 } else {
   cashier -= 4000;
   employeeId === 72 ? nextPayment = 0 : nextPayment = 4000;
 }
}
 
console.log(`${employees - employeeId + 1} workers have not been paid. No matter, go to Bahamas! The cashier has ${cashier}$.`);

*/
