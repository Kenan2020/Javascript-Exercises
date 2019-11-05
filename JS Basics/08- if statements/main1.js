/*
------------------------------------------
D4 - Selling smartphones exercise
------------------------------------------ 
Suppose you sell smartphones to customers.
Write a program with multiple conditions as before in order to sell a smartphone
to a customer who is interested.
Smartphone's price is 300$ and your cashier balance is 0 at the beginning.
Also the customer should know that you sell some accessories with the smartphone.
Headphones price is 50$, and cover for the smartphone 20$ each.
If the customer is not interested on buying anything then your cashier remains 0. 
If he interests on buying only the smartphone then add the price of the smartphone
to your cashier.
If the customer also wants to buy headphones, he gets 10% discount of the total price
(headphones and smartphone together). Update your cashier (total sales) accordingly.
In case the customer wants headphones and cover the discount is 15%.
If the customer wants only a cover, discount is 5% unless he chooses one of these
3 colors: green (7% discount), pink (12% discount) or orange (15% discount).
Update your cashier accordingly then.
Selling only accessories without a smartphone is not possible.
Print your cashier after the sale so your boss knows exactly how much did you manage
to sell to this customer.
p.s. Before you begin create a map on paper to help you organize and articulate
your thoughts.
 */
function sellSmartPhone(arr){
    cashier = 0, smartphone = 300, headphone = 50, cover = 20;
    arr.includes("smartphone") ?
    arr.includes("headphone") ?
    arr.includes(cover.color =="green") ?

    `` :
    `${cashier = (smartphone + headphone) - (smartphone + headphone)*10/100}` : 
    `${cashier += smartphone}` : 
    `${cashier}`


        return cashier
}
let x = ["headphone", "smartphone", cover = {color: "green"}]
console.log(sellSmartPhone(x))