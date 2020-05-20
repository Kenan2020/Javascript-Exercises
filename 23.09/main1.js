function checkPass(pw){
    if(typeof pw =="string"){
        if(pw.length <= 8){
            return "Invalid!"
        }else{
            return "Valid!"
        }
    }else{
        return "the password is not a string"
    }
}

let password="159465888"
let check= checkPass(password)
console.log(check)
console.log(password[6])