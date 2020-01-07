function calcAge(name, birthdate){
    let birth = new Date(birthdate)
    birth = birth.getFullYear()

    let today = new Date().getFullYear()
    

    return `age of ${name} is: ${(today - birth)}`

}
x = calcAge("Peter", "1969-03-15")
console.log(x)