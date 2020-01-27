let students = [{
    name : "omar",
    score : {Javascript: 45, html: 80, css: 50}
}, {
    name:"kenan",
    score: {Javascript: 80, html:80, css: 55}
}, {
    name:"peter",
    score: {Javascript: 50, html:45, css: 30}
}, {
    name:"ali",
    score: {Javascript: 60, html:80, css: 55}
}, {
    name:"isac",
    score: {Javascript: 80, html:80, css: 50}
}, {
    name:"sam",
    score: {Javascript: 75, html:50, css: 40}
}, {
    name:"hannah",
    score: {Javascript: 40, html:80, css: 50}
}, {
    name:"maria",
    score: {Javascript: 99, html:99, css: 99}
}, {
    name:"johne",
    score: {Javascript: 40, html:40, css: 50}
}]

function passYear(students){
    let sum = 0;
    let size = 0

    ul = document.createElement("ul")
    ul.className = "passed"
    document.body.appendChild(ul)

    ul = document.createElement("ul")
    ul.className = "nopass"
    document.body.appendChild(ul)

    for(x of students){
        for(y in x.score){
            if (x.score.hasOwnProperty(y)) size++;

            if(x.score[y]>= 50){
                sum++
            }
        }
        if(sum >= 2){
            passed = document.querySelector(".passed")
            li = document.createElement("li")
            li.appendChild(document.createTextNode(`${x.name} : you passed and you have ${sum} from ${size}, your marks: `))
            passed.appendChild(li)
            for(z in x.score){
                console.log(z, x.score[z])
            }
            
            
        }else{
            nopass = document.querySelector(".nopass")
            li = document.createElement("li")
            li.appendChild(document.createTextNode(`${x.name} : you did't passed and you have ${sum} from ${size}, your marks: `))
            nopass.appendChild(li)
        }
        sum = 0
        size = 0
    }
}
passYear(students)