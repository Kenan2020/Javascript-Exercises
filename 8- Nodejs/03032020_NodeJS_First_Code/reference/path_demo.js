const path = require("path")
//it's a core module already included with Node.js

//console.log(path)

//get the base file name (path.basename(__filename))
console.log(path.basename(__filename)); //returns : path_demo.js

//get the Directory name (path.dirname)
console.log(path.dirname(__filename));
//console.log(path.dirname("index.js"));

//get the file extention
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);
/* 
----------------------------------------------------------------------------------------------------
returns
----------------------------------------------------------------------------------------------------
{ 
    root: '/',
    dir: '/home/kenan/Schreibtisch/Javascript-Exercises/30032020_NodeJS_First_Code/reference',
    base: 'path_demo.js',
    ext: '.js',
    name: 'path_demo'
}
*/

//concatinate paths: join a path into a current path
//the result we want: ... current_path/test/hello.html
//console.log(path.join(__dirname, "test", "hello.html"));