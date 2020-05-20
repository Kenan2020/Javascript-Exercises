table = document.createElement("table")
table.id = "tbl"

for(i=0; i<4; i++){
    row = document.createElement("tr")
    row.id = i+1
    table.appendChild(row)
    for(j=0; j<3; j++){
        dt = document.createElement("td")
        dt.id = `${i+1}${j+1}`
        row.appendChild(dt)
    }
}
document.body.appendChild(table)

dt1 = document.getElementById("11")
dt2 = document.getElementById("12")
dt3 = document.getElementById("13")
dt4 = document.getElementById("21")
dt5 = document.getElementById("22")
dt6 = document.getElementById("23")
dt7 = document.getElementById("31")
dt8 = document.getElementById("32")
dt9 = document.getElementById("33")
dt10 = document.getElementById("41")
dt11 = document.getElementById("42")
dt12 = document.getElementById("43")


dt1.appendChild(document.createTextNode("ID"))
dt2.appendChild(document.createTextNode("Name"))
dt3.appendChild(document.createTextNode("E-Mail"))
dt4.appendChild(document.createTextNode("1001"))
dt5.appendChild(document.createTextNode("kenan"))
dt6.appendChild(document.createTextNode("kenan@gmail.com"))
dt7.appendChild(document.createTextNode("1002"))
dt8.appendChild(document.createTextNode("omar"))
dt9.appendChild(document.createTextNode("omar@web.de"))
dt10.appendChild(document.createTextNode("1003"))
dt11.appendChild(document.createTextNode("ahmad"))
dt12.appendChild(document.createTextNode("ahmad@hotmail.com"))

table.style.border = "2px solid #080"
dt1.style.border = "1px solid #ccc"
dt2.style.border = "2px solid #000"
dt3.style.border = "1px dashed #333"
dt4.style.border = "1px solid #aaa"
dt5.style.border = "1px solid #aaa"
dt6.style.border = "1px solid #aaa"
dt7.style.border = "1px solid #aaa"
dt8.style.border = "1px solid #aaa"
dt9.style.border = "1px solid #aaa"
dt10.style.border = "1px solid #aaa"
dt11.style.border = "1px solid #aaa"
dt12.style.border = "1px solid #aaa"

console.log(dt1)
    
    
    

