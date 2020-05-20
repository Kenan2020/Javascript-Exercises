
/*function logIn(username, password){

    let data={username: "kenan",
            password: 1234,
    }
    if(data.username == username && data.password == password){
        return "-------------------------------------------------------------<br>|>>>>::: Access Granted!! :::<<<<<|<br> -------------------------------------------------------------"
    }else{
        return ">>>>.....Access Denied!!....<<<<<<!"
    }

}

let x = logIn("kenan", 1234)
document.write(x)*/

function logIn(username, password){

    let data={username: "kenan",
            password: 1234,
    }
    if(data.username == username){
        if(data.password == password){
            return "Access Granted!!"

        }else{
            return "Wrong Password!"
        }

    }else if(data.password == password){
        return "Wrong Username!"

    }else{

        return "Wrong Username and Password!"
    }

}

let x = logIn("ken", 134)
document.write(x)