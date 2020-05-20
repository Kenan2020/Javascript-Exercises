let person = {
  name:"Peter",
  age:45,
  gender: "Male",

  displayName: function (){// or displayName(){
    return this.name;
  }
};

console.log(person.displayName())
