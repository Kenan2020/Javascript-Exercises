////////////Challenge3//////////////

function storyBuilder(titles, pars, typ){
    let topc=[], n=[];
for (let i=0; i<titles.length; i++){
    for(j=0; j<paragraphs.length; j++){
        if((titles[i].type == typ)&&(titles[i].keywords==paragraphs[j].title)){
            topc.push(titles[i].topic);
            n.push (paragraphs[j].text)
    }
            
        }

}

 return [topc, n]
}

let HarryPotter = {type: "fantasy", keywords:"'magic', 'Harry', 'Potter'", topic:"Harry Potter ist eine Fantasy-Romanreihe der englischen Schriftstellerin Joanne K. Rowling."},
    Ahmad = {type: "Comedy", keywords:"Ahmad", topic:"Ahmad's topic"},
    Omar = {type: "tragedy", keywords:"Omar", topic:"Omar's Topic"};

let titles = [HarryPotter, Ahmad, Omar];

let paragraphs = [{title:"HarryPotter", text:"Der Bloomsbury-Verlag veröffentlichte 1997 zunächst 500 Stück"},
                  {title: "Ahmad", text: "Ahmad's Text"},
                  {title: "Omar", text: "Omar's text"}]

let type = "Comedy"

let result = storyBuilder(titles, paragraphs, type)
console.log(result)