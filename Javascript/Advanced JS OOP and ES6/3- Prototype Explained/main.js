/*
function student(){
    this.name = "Maria",
    this.gender = "Female"
}

student.prototype.age = 15
let student1 = new student()
//student1.age = 20
student.prototype.MyName = function(){
    return `${this.name}`
}
console.log(student1.MyName())
student.prototype.sayHi = function(){
    return `Hi ${this.name}`
}
console.log(student1.sayHi())
for(x in student1){
    console.log(x, ` : ${student1[x]}`)
}
let student2 = new student()
console.log(student1, student2)

/*
    Prototype is invisible property of an object. It returns prototype object of a function to which it links to.
*/
/*
//person constructor

function Person(f, l, dob){
    this.firstName = f;
    this.lastName = l;
    this.birthday = new Date(dob)
    //this.calculateAge = function(){
      //  const diff = Date.now() - this.birthday.getTime()
        //const ageDate = new Date(diff)
        //return Math.abs(ageDate.getUTCFullYear() - 1970)
    //}
}
//calculate Age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}
person1 = new Person("Mustafa", "Osman", "1987-8-15")
console.log(person1.calculateAge())

//gets Married
let person2 = new Person("Maria", "Smith", "1996-5-25")
Person.prototype.getsMaried = function(newLastName){
    this.lastName = newLastName
}
person2.getsMaried(person1.lastName)
console.log(person2)

//get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
console.log(person2.getFullName())
*/
function Animal(k){
    this.kind = k;
    //this.legs = 4
}
animal1 = new Animal("Bird")
animal2 = new Animal("Cat")
console.log(animal1, animal2)
Animal.prototype.testKind = function(){
    if(this.kind == "Bird"){
        return this.legs = 2
    }else{
        return this.legs = 4
    }
}
console.log(animal1.testKind())
console.log(animal2.testKind())
console.log(animal1, animal2)

/*
Animal.prototype.callLegs = function(){
    if(this.kind == "bird"){
        this.legs = 2
    }else{
        this.legs = 4
    }
}
*/