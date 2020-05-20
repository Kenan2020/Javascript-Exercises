let food = ["Pizza", "Kebab", "Döner", "Falafel", "Kartofel Salat", "Briani"]

for(let counter = 0; counter < food.length; counter++){
    console.log(food[counter])
    document.write(food[counter] + "<br>")
}

///////////////////////////////////////////////////////////////////////////
document.write("<hr>")

let colors = ["Yellow", "Red", "Green", "Blue", "Black", "wheat", "aqua"]
let item = "#CC00EE"
colors.push(item)
for(i = 0; i < colors.length; i++){
    document.write(colors[i] + "<br>")
}
////////////////////////////////////////////////////////////////////////////

let div;
for(i = 0; i < colors.length; i++){
    div="<div style='text-align:center;margin:0 auto;height:40px;color:white;width:"+i+5+"%;background:"+colors[i]+"'>" + colors[i]+ "</div>";
    document.write(div);
}
/////////////////////////////////////////////////////////////////////////////
