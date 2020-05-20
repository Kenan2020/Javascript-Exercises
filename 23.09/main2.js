function checkPass(pw){
    if(typeof pw =="string"){
        if(pw.length > 8 && pw[0]=="$"){
            return "Valid!"
        }else{
            return "Invalid!"
        }
    }else{
        return "the password is not a string"
    }
}

let password="$_asdfasd"
let check= checkPass(password)
console.log(check)
