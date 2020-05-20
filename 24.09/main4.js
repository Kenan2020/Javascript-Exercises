function checkPass(pw){

    if(pw.length < 8 || !pw.includes("$")){
        return "invalid";
    }else{
        return "valid"
    }
}

    

let password = prompt("Please Enter Your Password: ");
let result = checkPass(password);
document.write(result)
