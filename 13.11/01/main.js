/*
-------------
13.11.2019
-------------
Mobile Numbers Price: initial price is 39€
Mobile Number are 10 excluding the prefix (+49)or(0)
1- Silver: the number is formed of 4 different digits additional 50€
2- Golden: the number is formed of the same digit additional 100€
3- Platinum: the number is formed of the customer birthdate additional 200€
*/
function getPrice(initPrice, mobileNumber, userBirthDate){
    let result = "Please Enter a valid Mobil Number";
    if(mobileNumber.length != 8){
        return result
    }else if(mobileNumber.includes(userBirthDate)){
        return `Platinium Number: ${initPrice + 200}`
    }

    let test = Array.from(mobileNumber)
    let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(i=0; i < test.length; i++){
        switch(test[i]){
            case "0":
                counter[0] = counter[0]+1; break;
            case "1":
                counter[1] = counter[1]+1; break;
            case "2":
                counter[2] = counter[2]+1; break;
            case "3":
                counter[3] = counter[3]+1; break;
            case "4":
                counter[4] = counter[4]+1; break;
            case "5":
                counter[5] = counter[5]+1; break;
            case "6":
                counter[6] = counter[6]+1; break;
            case "7":
                counter[7] = counter[7]+1; break;
            case "8":
                counter[8] = counter[8]+1; break;
            case "9":
                counter[9] = counter[9]+1; break;
        }
    }
    for(j=0; j<counter.length; j++){
        if(counter[j]== 8){
            return `Golden Number Price: ${initPrice + 100}`
        }else if(counter[j] >= 2 && counter[j] <= 4){
            return `Silver Number Price: ${initPrice + 50}`
        }
    }
    return `Normal Number Price ${initPrice}`
    
}

let n1="11112222", n2="88888888", n3="24031987", n4="12345678", n5="1254", bd="24031987";

let t1 = getPrice(39, n1, bd);
let t2 = getPrice(39, n2, bd);
let t3 = getPrice(39, n3, bd);
let t4 = getPrice(39, n4, bd);
let t5 = getPrice(39, n5, bd);

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);

//let x = getPrice(39, "11112222", 30081969)
//console.log(x)