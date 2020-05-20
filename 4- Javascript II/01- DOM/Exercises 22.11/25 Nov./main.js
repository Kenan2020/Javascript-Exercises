(function evenNum(){
    let tmp = []
    for (i=1; i<=10; i++){
        tmp.push(i)
    }
    ul = document.createElement("ul")
    ul.id = "list"
    document.querySelector("body").appendChild(ul)//document.body
    for (let j=0; j<tmp.length; j++){
        if(tmp[j]%2 ==0){
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(tmp[j]))
            li.className="listItem"
            document.querySelector("ul").appendChild(li)
        }
    }
    liOdd = document.querySelectorAll("li:nth-child(odd)")
    liOdd.forEach(function(item){
        item.style.background = "#f4f4f4"
    })
    liEven = document.querySelectorAll("li:nth-child(even)")
    liEven.forEach(function(item){
        item.style.background = "#ddd"
    })

    ul.style.listStyleType = "none"
    ul.style.fontSize= "20px"
    console.log(tmp)
})()