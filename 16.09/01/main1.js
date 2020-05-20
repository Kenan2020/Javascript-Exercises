//document.getElementById("table").innerHTML="<tr><td>Hey! from javascript</td></tr>"
for(let y=0; y<25; y++){
    //document.getElementById("table").innerHTML="<tr></tr>"
    //document.write("&nbsp;*&nbsp;");
    for(let x=0; x<25; x++){
        //if(x===0 || x===24 || y === 24 || y===0 || y===x
          //   || y+x ===24 || x ===12 || y===12 || (x<=12 && y<=12) ){
            //document.write("<div>*</div");

        //}else{
          //  document.write("")
        //}
        if(x*x +y*y <10){
            DocumentTimeline.write("<div>*</div>")
        }esle{
            document.write("<div></div>")
        }
    }
    document.write("<br>")
}