function searchForLetter(pw, ltr){
    if(pw.indexOf(ltr) < 0){
        return `This ${ltr} is not found in the given Password!`
    }else{
        return `Yes it is found in the position: ${pw.indexOf(ltr)}`

    }
}


let ltr1 = prompt("search in my password for this letter: ");

let pass = "kenan";

let result1 = searchForLetter(pass, ltr1);

document.write(result1);
