function createTable(){
    //body reference
    const body = document.querySelector("body")

    //create elements <table> and <tbody>
    const tbl = document.createElement("table")
    const tblBody = document.createElement("tbody")

    //cells creation
    for(let i=0; i<3; i++){
        //table row creation
        const row = document.createElement("tr")
        for(j=0; j<3; j++){
            //create element <td> and text node
            //make the text node as content of <td>
            //put <td> at the end of the table row
            const cell = document.createElement("td")
            const cellText = document.createTextNode("cell is row " + i + ", and column " +j)
            cell.id=(j+""+i)
            cell.appendChild(cellText)
            row.appendChild(cell)
        }
        //row add to the end of tablebody
        tblBody.appendChild(row)
    }
    //append the <tbody> inside the <table>
    tbl.appendChild(tblBody)
    //put the <table> inside the <body>
    body.appendChild(tbl)
    //adding tbl border attribute
    tbl.setAttribute("border", "4")
    return tbl
}
const table = createTable()
arr = Array.from(table.children[0].children)


for(i=0; i<arr.length; i++){
  if(i%2 ==0){
      arr[i].style.background= "#eee"
  }else{
      arr[i].style.background = "#ccc"
  }
}


let c = document.getElementById("00")
c.innerHTML= "cell 1"

//console.log(table.children[0].children)
console.log(arr)
