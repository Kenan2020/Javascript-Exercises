//primitive

//String
const name= `${1+1+1} People is Here`

//Reference VS Primitive type
let x={name:"Kenan",
        age: 50}
let y = 1200;
let a, b;
a = x;
console.log(a)

x.name = "Kinan";
console.log(a)
a.name = "Kinano";
console.log(x)

b = y;
console.log(b);
y = 1000;
console.log(b)
