document.getElementById("btn1").addEventListener("click", loadCustomer)
document.getElementById("btn2").addEventListener("click", loadCustomers)

//load single Customer
function loadCustomer(){
    const request = new XMLHttpRequest()
    request.open("GET", "customer.json", true)
    request.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText)
            const andri = this.responseText
            const customer = JSON.parse(andri)
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `
            document.getElementById("customer").innerHTML = output
        }
    }
    request.send()
}
//load Customers
function loadCustomers(){
    const request = new XMLHttpRequest()
    request.open("GET", "customers.json", true)
    request.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText)
            let output = ""
            for(x of customers){
                output += `
                
                <ul style="border:2px solid green; list-style-type: none; padding: 10px; background-color: #eee; margin: 5px 0">
                    <li><strong>ID:</strong><a> ${x.id}</a></li>
                    <li><strong>Name:</strong><a> ${x.name}</a></li>
                    <li><strong>Company:</strong><a> ${x.company}</a></li>
                    <li><strong>Phone:</strong><a> ${x.phone}</a></li>
                </ul>
            `
            }
            document.getElementById("customers").innerHTML = output
        }
    }
    request.send()
}
