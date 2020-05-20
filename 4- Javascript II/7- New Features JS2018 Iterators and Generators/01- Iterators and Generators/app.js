//Iterators Example
function nameIterator(names){
    let nextIndex = 0

    return {
        next : function(){
            return nextIndex < names.length ?
            {value : names[nextIndex++], done : false} :
            {done : true}
        }
    }
}
//create an Array of names
const namesArr = ["Jack", "Mohamad", "kenan", "John", "Jill"]

//Init iterator
/*
const name = nameIterator(namesArr)

console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)
console.log(name.next())
*/
//Generators Example
function* sayNames(){
    yield "Jack";
    yield "Jill"
    yield "John"
}
const name = sayNames()


console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)
console.log(name.next())


//ID Generator
function* idCreator(){
    let index = 1
    while (true){
        yield index++
    }
}
const gen = idCreator()
console.log(gen.next().value)
console.log(gen.next().value)