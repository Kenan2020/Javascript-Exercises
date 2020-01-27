//class basic syntax for declaration (Erklärung)
class User{
    //we should start with constructor
    constructor(userName, password){
        this.name = userName;
        this.password = password
    }
    /*
        we wirte the properties inside the constructor
        but we write the methods outside the constructor
    */
   changePass(newPass){
    this.pass = newPass
   }
}
//the usage (die Verwnedung):
let u1 = new User ("Kumaro", "1234")

class Person{
    constructor(firstName, lastName, dob){
        this.fName = firstName;
        this.lName = lastName;
        this.birthdate = new Date(dob)
    }
    greetings(){
        return `Hi ${this.fName} ${this.lName}`
    }
    calAge(){
        const diff = Date.now() - this.birthdate.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    getsMarried(newLastName){
        this.lName = newLastName
    }
}
let p1 = new Person("kenan", "ali", "1987-08-25")
const Book = class{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    givePrice(price){
        this.price = price
    }
}
/*
//console.log(u1)
p1.getsMarried("Mercedes")
console.log(p1.greetings())
console.log(typeof Person)
*/
let b1 = new Book("Javascript", "Jason", 35)
b1.givePrice(25)
console.log(b1)