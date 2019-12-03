questions = document.querySelectorAll(".ques")// the number of questions

input = document.querySelectorAll(".form-check-input")

questionRow = document.querySelectorAll(".questionRow")

x = document.querySelector(".submit")
trueAnswer = ["option1", "option7", "option15", "option16", "option21", "option26", "option32", "option36", "option45"]//correct answers
userAnswer = [];
for(i=0; i<input.length; i++){
    if(input[i].checked == true){
        console.log(input[i].value)
        userAnswer.push(input[i].value)
        
    }
}
console.log(userAnswer)

for(i=0; i<questionRow.length; i++){
    
    questionRow[i].addEventListener("mouseenter", runBg)
    questionRow[i].addEventListener("mouseleave", runBg)
    questionRow[i].style.borderBottom = "2px solid #eee"
}
x.addEventListener("click", runFunc)




function runFunc(e){
    let sumTrue = 0;

    for(i=0; i<trueAnswer.length; i++){
        for(j=0; j<input.length; j++){
        if(input[j].checked == true && input[j].value == trueAnswer[i]){
            
            sumTrue ++
        }
    }
}
    window.alert(`True: ${sumTrue}, False: ${questions.length - sumTrue}`)
    
    //location.reload(true);//to refresh the page
    window.location = "index.html"; // to refresh the page and go back to a location
    //e.preventDefault();   
}

function runBg(e){
    if(e.type == "mouseenter"){
        
        e.target.style.backgroundColor = "#eee"
    }else if(e.type == "mouseleave"){
        e.target.style.backgroundColor = ""
    }
    //e.preventDefault();
}

