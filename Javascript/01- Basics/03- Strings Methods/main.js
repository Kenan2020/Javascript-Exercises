const firstName = "kenan", lastName ="Mawl",
    age = 25, str="Hello there my name is kenan",
    tages = "web design, web development, programming";

let val;

val = firstName + lastName;

//concatination
val = firstName + " " + lastName;

//Append
val = "kenan ";
val += "Mawl"

val = "Hello, My name is " + firstName + " and I am " + age + "years old.";

//Escaping
val = 'that\'s awesome, I can\'t wait.';

//Length
val = firstName.length

//concat()
val = firstName.concat(" ", lastName);

//Change Case
val = firstName.toLowerCase();
val = firstName.toLocaleUpperCase();
val = lastName[2]

//indexOf()
val = firstName.indexOf("n")
val = firstName.lastIndexOf("n")

//charAt()
val = firstName.charAt(4) // val = firstName[4]

//get the last char
val = firstName[firstName.length-1]
val = firstName.charAt(firstName.length-1)

//substring()
val = str.substring(0,4);

//slice()
val = str.slice(0,4);
val = firstName.slice(-3); //the last 3 chars

//split()
val = str.split(" ");

//replace()
val = str.replace("kenan", "kinan");

//includes()
val = str.includes("k"&&"x")//returns true or false



//output
console.log(val)