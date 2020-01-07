/*
    - Listen for submit
    - UI Variables
    - Calculate Results
*/
document.getElementById("loan-form").addEventListener("submit", calculateResults)

//Hide results

let amount = document.getElementById("amount")
let interest = document.getElementById("interest")
let years = document.getElementById("years")
let monthlyPayment = document.getElementById("monthly-payment")
let totalPayment = document.getElementById("total-payment")
let totalInterest = document.getElementById("total-interest")
const loading = document.getElementById("loading")
const results = document.getElementById("results")

//Calculate Results
function calculateResults(e){
    /*
        - Hide results
        - Show loader
        - preventDefault
        - Priciples
    */
   results.style.display = "none"
   loading.style.display = "block"
   setTimeout(clearLoaderShowResults, 3000)
    
    let amountValue = parseFloat(amount.value)
    let interestValue = parseFloat(interest.value) /100 /12
    let yearsValue = parseFloat(years.value) * 12

    //Compute monthly payment
    const x = Math.pow(1 + interestValue, yearsValue)//20
    const monthly = (amountValue * x * interestValue) / (x - 1)//21

    if(isFinite(monthly)){
        //Show loader
        loading.style.display = "block"
        setTimeout(clearLoaderShowResults, 3000)
        
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * yearsValue).toFixed(2)
        totalInterest.value = ((monthly * yearsValue) - amountValue).toFixed(2)

    }else{
        //alert("Error!")
        showError("Please Check your Numbers")
    }
        e.preventDefault()
    /*
        P = iA/(1-(1+i)^-Y)
        i = interest
        A = amount
        Y = years
    */
   //monthlyPayment.value = interest.value * amount.value /(Math.pow((1 + interest.value), years.value) - 1)
   
}
function clearLoaderShowResults(){
    loading.style.display = "none"
    results.style.display = "block"
}
//show error
function showError(error){
    //Create a div
    const errorDiv = document.createElement("div")
    //Add class
    errorDiv.className = "alert alert-danger"
    //create text node and apped to div
    errorDiv.appendChild(document.createTextNode(error))
    //Get Elements
    const card = document.querySelector(".card")
    const heading = document.querySelector(".heading")
    //insert error above heading
    card.insertBefore(errorDiv, heading)
    //hide the loader and the results
    results.style.display = "none"
    loading.style.display = "none"
    //clear error after 3seconds
    setTimeout(function(){
        document.querySelector(".alert").remove()
    }, 3000)


}
