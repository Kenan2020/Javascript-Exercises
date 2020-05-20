function cur (price){
    let currency = prompt("enter the currency: ");

    return price.concat(currency);

}

let price = cur("100");

document.write(price)


