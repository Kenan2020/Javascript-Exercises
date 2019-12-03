/*
The Element.matches(css-selector) doesn't look for anything, it nmerely checks if the
element matches the given CSS-Selector. Return true, otherwise it returns false
the method comes in handy when we are iterating over elements (for example array or anything 
similere) and trying to filter out those that interest us.

can be any collection instead of body.children
*/
const elements = document.body.children
for(let elem of elements){
    if(elem.matches("a[href$='zip']")){//$ value includes zip [attribute]
        console.log(`The archive reference: ${elem.href}`)
    }

}