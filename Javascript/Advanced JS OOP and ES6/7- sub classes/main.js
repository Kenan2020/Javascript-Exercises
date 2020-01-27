class Person{
    constructor(firstName, lastName){
        this.fName = firstName;
        this.lName = lastName
    }
    greetings(){
        return `Hi ${this.fName} ${this.lName}`
    }    
}
let p1 = new Person("kenan", "ali", "1987-08-25")

class Customer extends Person{//inheritance in classes
    constructor(cFirstName, cLastName, phoneN, memberShip){
        super(cFirstName, cLastName)//the constructor of the main class
        this.phone =phoneN
        this.memberShip = memberShip
    }
    giveMembershipCost(cost){
        this.memcost = cost
    }
}
/*
let c1 = new Customer("Harris", "Riazh", "555-555", "standard")
console.log(c1)
*/
const Books = class{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    givePrice(price){
        this.price = price
    }
}
class Magazine extends Books{
    constructor(mTitle, mAuthor, year){
        super(mTitle, mAuthor)
        this.year = year
    }
    showYear(){
        return this.year
    }
}
let m1 = new Magazine("JS", "Jason", "2020")
//m1.showYear()
console.log(m1)