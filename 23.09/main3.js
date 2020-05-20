function checkPass(pw){

        if(pw.length > 8){
            for(let i=0; i<pw.length; i++){
                if(pw[i]==="$"){
                    return "Valid!"
                }
            } return "Invalid";
        }else{
            return "Invalid!";
        }
}

let password="11321321321321$"
let check= checkPass(password)
console.log(check)
