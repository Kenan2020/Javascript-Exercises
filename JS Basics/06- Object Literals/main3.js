function hired(arr, skill){
    let tmp=[];

    for(let i=0; i<arr.length; i++){
        count = 0;
        for(let j=0; j<arr[i].progLang.length; j++){
            for(let k=0; k<skill.length; k++){
                if(arr[i].progLang[j] == skill[k]){
                    count ++;
                }
            }
        }
        if(count >= 3){
            tmp.push(arr[i].getFullName())
        }
    }
    return tmp
};

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
console.log(hired(candidats, skills, 3));
