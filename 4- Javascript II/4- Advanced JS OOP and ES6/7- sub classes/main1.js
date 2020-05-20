class Property{
    constructor(location, size){
        this.location = location;
        this.size = size
    }
}
class Flat extends Property{
    constructor(location, size, owner, QMP){
        super(location, size)
        this.owner = owner;
        this.QMP = QMP
    }
    calculatePrice(){
        return this.size * this.QMP
    }
}
class Clinice extends Flat{
    constructor(location, size, owner, QMP, types, doctors){
        super(location, size, owner, QMP)
        this.types = types;
        this.doctors = doctors
    }
}
class Person{
    constructor(firstName, lastName){
        this.fName = firstName;
        this.lName = lastName;
    }
}
class Doctor extends Person{
    constructor(firstName, lastName, specialization, experience){
        super(firstName, lastName)
        this.specialization = specialization;
        this.experience = experience
    }
}
let owner = new Person("Harris", "Riazh")
let d1 = new Doctor("Harris", "Riazh", "Mental", "advanced")
let d2 = new Doctor("Harris2", "Riazh", "Mental", "advanced")
let d3 = new Doctor("Harris3", "Riazh", "Mental", "advanced")
let arrOfDoc = [d1, d2, d3]
let clinice = new Clinice("Hammerbrook", 625, owner, 100, ["Mental"], arrOfDoc)

//f1.calcPrice()
console.log(clinice)