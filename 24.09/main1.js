//////////Prompt////////////
/*let person=prompt("Please Enter Your Name: ", "");
document.write(`Hallo ${person}`)*/
function greet(){
    let name = prompt("Please Enter your Name: ");
    if(name == "" || name ==null){
        txt = "There is no name!"
    }else{
        txt =`Hallo ${name}`
    }
        document.write(txt)

    }


greet();