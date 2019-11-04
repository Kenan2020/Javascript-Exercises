let val, par;
//Number to String
val = 555;
par = String(val);
par = String(val + 4)

//Bool to String
val = true;
par = String(val);

//Date to String
val = new Date();
par = String(val)

//Array to String
val = [1, 2, 3, 4, 5];
par = String(val)

//toString
val = [1, 2, 3, 4, 5];
par = val.toString();

//String to Number
val = "555";
par = Number(val) //console.log(par.toFixed());

//Bool to Number
val = true;
par = Number(val);

//Null to Number
val = null;
par = Number(val);

//Special String to Number
val = "Hello";
par = Number(val) //NaN

//Array to Number
val = [1, 2, 3];
par = Number(val) //NaN

// parseInt & parseFloat
val = "555.456";
par = parseInt(val)
par = parseFloat(val)


//Output
console.log(val, typeof val, val.length)
console.log(par, typeof par, par.length)
console.log(par.toFixed(2), typeof par)
//console.log(par == val)

//NaN concept :
function checkNaN(x){
    if(isNaN(x)){
        return NaN;
    }
    return x;
}
console.log(checkNaN("1")) //expected output: "1"
console.log(checkNaN("Hello")) // expected output: NaN