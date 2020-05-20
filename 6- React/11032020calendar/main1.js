let today = new Date()
let month = m[today.getMonth()]
let year = today.getFullYear()


let tDay = d[today.getDay()]
let firstDay = (new Date(year, today.getMonth())).getDay()
let monthDays = new Date(year, today.getMonth(), 0).getDate();//Day 0 is the last day in the previous month(days of the month)


h4 = document.createElement("h4")
span = document.createElement("span")

h4.calssName = "head"

h4.appendChild(document.createTextNode(`${month}`))
span.appendChild(document.createTextNode(` ${year}`))

caption.appendChild(h4)
h4.appendChild(span)

let tmp=[]
let rowNum = Math.ceil((firstDay + monthDays)/7)

let elem = firstDay + monthDays
let endDays = rowNum - elem % rowNum

for(i=0; i<firstDay; i++){
    tmp.push("")
}
for(j=0; j<monthDays; j++){
    tmp.push(j+1)
}
for(z=0; z<endDays; z++){
    tmp.push("")
}

let k = 0
while(k<tmp.length){
    for(l=0; l<rowNum; l++){
        tr = document.createElement("tr")
       
        for(n=0; n<7; n++){
            
            td = document.createElement("td")
            td.appendChild(document.createTextNode(tmp[k]))
            tr.appendChild(td)
            k++
        }
        tbody.appendChild(tr)
    }
}