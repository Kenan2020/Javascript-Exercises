function rep(str, re, newRe){
    let newStr = str.replace(re, newRe);
    return `The time was: ${str} Uhr
The time is now: ${newStr} Uhr`;

}

let t ="9:05", re = "05", newRe ="00";
let x = rep(t, re, newRe);
console.log(x);