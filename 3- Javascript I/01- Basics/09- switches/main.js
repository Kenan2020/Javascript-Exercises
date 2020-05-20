/*
let exp = value;
switch(exp){
    case value1:
        statements
        break;
    case value2:
        statements
        break;
    ...
    default:
        statements
}
*/
function colorToDay(color){
    switch(color){
        case "green":
            return `saturday`
        break;
        case "blue":
            return `sunday`
        break;
        case "white":
            return `monday`
        break;
        case "pink":
            return `tuesday`
        break;
        case "brown":
            return `wednesday`
        break;
        case "lila":
            return `thursday`
        break;
        case "rosa":
            return `freiday`
        break;

    }

}
let x ="green";
y = colorToDay("green")
console.log(y)