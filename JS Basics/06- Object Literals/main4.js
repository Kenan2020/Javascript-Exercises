function hired(arr, skill){
    let tmp=[];

    for(let i=0; i<arr.length; i++){
        count = 0;
        arr[i].progLang.forEach(function(item){
            if(skill.includes(item)){
                count ++;
            }
        });

        if(count >= 3){
            tmp.push(arr[i].getFullName())
        }
        
    }
    return tmp;

}
candidats =[{firstName: "Omar",
            lastName: "smith",
            progLang: ["Python", "Java", "Ruby"],
            getFullName: function(){
                return `${this.firstName} ${this.lastName}`
            }},
            {firstName: "kenan",
            lastName: "Mawloud",
            progLang: ["Java", "C#", "C++"],
            getFullName: function(){
                return `${this.firstName} ${this.lastName}`
            }},
            {firstName: "Mohamad",
            lastName: "Ali",
            progLang: ["JS", "Ruby", "C++"],
            getFullName: function(){
                return `${this.firstName} ${this.lastName}`
            }}
];
skills = ["PHP", "JS", "Ruby", "Python", "Java"];
console.log(hired(candidats, skills));
