table = document.querySelector(".table")
caption = document.querySelector(".cap")

let appoinment = {
    M:{Am: "reserved",Pm: "reserved"},
    T:{Am: "free",Pm: "reserved"},
    W:{Am: "reserved",Pm: "free"},
    Th:{Am: "free",Pm: "reserved"},
    F:{Am: "free",Pm: "free"}
}
let participent =[ 
    {name: "Omar", subject: "Important matter!"}]

function checkFreeTime(appoinment, participent){
    for(z of participent){
        for(x in appoinment){
            //console.log(x)
            for(y in appoinment[x])
                if(appoinment[x][y] == "free"){
                    //console.log(x, y, appoinment[x][y])
                    
                    tr = document.createElement("tr")
                    td1 = document.createElement("td")
                    td1.appendChild(document.createTextNode(`${x}`))

                    td2 = document.createElement("td")
                    td2.appendChild(document.createTextNode(`${y}`))

                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    
                    table.appendChild(tr)
                    
                }
        }
        caption.appendChild(document.createTextNode(`name : ${z.name}, subject: ${z.subject}`))
        //console.log(z.name)
    }
}
checkFreeTime(appoinment, participent)