table = document.querySelector(".table")
caption = document.querySelector(".cap")
tbody = document.querySelector(".tbody")

document.querySelector("#submit").onclick = myFunc

const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

let mth = document.querySelector("#mth")
let y = document.querySelector("#year")
let newDate = new Date()
let tDay = d[newDate.getDay()] //get today

function myFunc(e) {
    if (mth.value >= 0 && mth.value < 12) {

        if (!mth.value && !y.value) {

            mth.value = newDate.getMonth() //get the current month
            y.value = newDate.getFullYear() //get the current year

        } else if (!y.value) {

            y.value = newDate.getFullYear() //get the current year

        } else if (!mth.value) {
            alert("Please enter a valid month's number")
            return
        } else {
            newDate.setFullYear(y) //set year from the input's values
            newDate.setMonth(mth)

        }
    } else {
        alert("Please enter a valid month's number between 0 and 11")
        return
    }

    month = m[mth.value]

    h4 = document.createElement("h4")
    span = document.createElement("span")

    h4.calssName = "head"

    h4.appendChild(document.createTextNode(`${month}`))
    span.appendChild(document.createTextNode(` ${y.value}`))

    caption.appendChild(h4)
    h4.appendChild(span)

    let firstDay = new Date(y.value, mth.value).getDay() // return the first day of this month [0-6]

    const getDaysInMonth = function (date) { // return how many days in this month
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    monthDays = getDaysInMonth(new Date(y.value, mth.value));

    let tmp = []

    let elem = firstDay + monthDays // 3 + 31 = 34
    let rowNum = Math.ceil(elem / 7) // (3 + 31)/7 = 5

    let endDays = (rowNum * 7) - elem

    for (i = 0; i < firstDay; i++) {
        tmp.push("")
    }
    for (j = 0; j < monthDays; j++) {
        tmp.push(j + 1)
    }
    for (z = 0; z < endDays; z++) {
        tmp.push("")
    }

    let k = 0
    while (k < tmp.length) {
        for (l = 0; l < rowNum; l++) {
            tr = document.createElement("tr")

            for (n = 0; n < 7; n++) {

                td = document.createElement("td")
                td.appendChild(document.createTextNode(tmp[k]))

                tr.appendChild(td)

                k++
            }
            tbody.appendChild(tr)
        }
    }
    let tDate = new Date()
    document.querySelectorAll("td").forEach(function (item) {

        if (item.innerText == tDate.getDate()) {
            item.style.backgroundColor = "lightblue"

        }
    })
    e.preventDefault()
}

table.addEventListener("click", function (e) {
    document.querySelectorAll("td").forEach(function (item) {
        if (item.style.backgroundColor = "red") {
            item.style.backgroundColor = ""
        }
    })
    let target = e.target.closest("td")
    if (target.innerText == "") {
        target.style.backgroundColor = ""
    } else {
        target.style.backgroundColor = "red"
    }
})