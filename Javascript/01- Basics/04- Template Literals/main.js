const name = 'John', age = 31, job ='Web Developer', city = 'Hamburg';
let html;
//without template strings (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
function getCity(){
    return "New York"
}
//with template literales (ES6)
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${getCity()}</li>
    <li>${1+4}</li>
    <li>${age>30 ? "over 30" : "under 30"}</li>
</ul>`;

//implentation
document.body.innerHTML = html
