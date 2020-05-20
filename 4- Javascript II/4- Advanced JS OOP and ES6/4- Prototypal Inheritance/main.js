/*
prototype is an invisible property of all objects that we create, it has typeof object,
it has some predefined methods like isPrototyeof() and more.
we can use prototype to add extra properties after we finish our object or contructor defifnition.
the extra added properties using prototype it will added to add instances from that object

*/
let animal = {
    eats : true
}
let rabbit = {
    jumbs : true
}
/*
with constructor we use .prototype
with object we use .__proto__
*/
rabbit.__proto__= animal
rabbit.__proto__.ears = 2
//console.log(rabbit.__proto__)

//console.log(rabbit)

/*
function Animal(iEats){
    this.eats = iEats
}*/
let longEars = {
    earlength : 10,
    __proto__ : rabbit
}
/*
let anim1 = new Animal(true)
console.log(anim1)
*/
//console.log(longEars.eats)
/*
    Task : Please write a user object
    user has two properties : name & pass
    write another object it is geust
    geust has two extra properties which are role and authorities
    implement inheritance
*/
/*
const user = {
    name : "username",
    pass : "password",
    changePassword : function(newPass){
        this.pass = newPass
    }
}
const geust = {
    type: "geust",
    authorities:["read"],
    __proto__ : user
}
*/
/*
write admin object and inherit geust and has an extra method to add or delete authorities
modifyAuths : function()
*/
/*
const admin = {
    __proto__: geust,
    modifyAuths : function(addOrDel, item){
        if(addOrDel){//is boolean true for add and false for delete
            if(item){
                this.authorities.push(item)
            }else{
                console.log("we can't add empty item!")
            }
        }else{
            if(item){
                let pos = 0
                for(i = 0; i < this.authorities; i++){
                    if(this.authorities[i] == item) pos = i
                }
                if(pos > 0) this.authorities.splice(pos, 1)
                else console.log("Sorry item does't exist!")
            }else{
                this.authorities.pop()
            }
        }
        return this.authorities
    }
}
*/
/*
admin.modifyAuths(1, "write")
//admin.modifyAuths(1, "read")
admin.modifyAuths(0, "write")
geust.changePassword("myEasyPass")
//console.log(geust.pass)
console.log(admin.authorities)
*/
function Product(iName, iPrice){
    this.name = iName
    this.price = iPrice
    this.getPrice = function(){
        return this.price
    }
}

const p1 = new Product("MyPhone", 250)
function Food(fName, fPrice, iVegan){
    Product.call(this, fName, fPrice)//this for food
    this.category = "food"
    this.vegan = iVegan
}
p2 = new Food("salat", 3, true)
//console.log(p1)
//console.log(p2.getPrice())
function User(uName, uPass){
    this.name = uName
    this.pass = uPass
}
function Geust(gName, gPass, gType, gAuth){
    User.call(this, gName, gPass)
    this.type = gType
    this.gAuth = gAuth

}
const user1 = new User("user", "abcccc")
const geust1 = new Geust("user1", "123", "geust", "read")

console.log(user1)
console.log(geust1)

