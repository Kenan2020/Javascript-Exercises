# Express-Handlebars

## Get started with express handlebars

- Create package.json file
- Install nodemon
- Modify package.js
- Install dotenv
- Create a js file in the root (index.js or app.js) as an entry point
- Install express.js and express-handlebars

```bash
npm init
npm install -D nodemon
```

The Script part inside package.js should be like this

```bash
"scripts": {
    "start": "node index",
    "dev": "nodemon index"
}
```

```bash
npm install dotenv
npm install express
npm install express-handlebars
```

`Directory Structure`

```diagram
.
├── app.js (or index.js) / entry point
├── .env (PORT=3000)
├── public
|   └── css
|        ├── about.css
|        ├── dashboard.css
|        └── home.css
└── views
    ├── home.handlebars /template1(contain html code)
    ├── about.handlebars /template2
    ├── dashboard.handlebars /template3
    ├── contact.handlebars
    ├── lookup.handlebars
    ├── patials
    |    ├── footer.handlebars
    |    └── header.handlebars
    └── layouts
         └── main.handlebars /{{{body}}}

2 directories, 3 files
```

`in index.js file`

- import express service
- initialise the express app
- Create default layout

```js
const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');

const app = express();

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main', //main.handlebars as default layout
  })
);
app.set('view engine', 'handlebars');

//Routing
app.get('/', (req, res) => {
  res.render('home'); //template1
});
app.get('/about', (req, res) => {
  res.render('about'); //template2
});

dotenv.config();
PORT = process.env.PORT;
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`));
```

`if we want to change the default folder layout name`

```js
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/new_default_folder_name',
  })
);
```

`or we can use path after import it`

```js
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/new_default_folder_name'),
  })
);
```

## send data to Express Handlebars

`for example we want to make the title of the templates dynamic`
(when we are in home page the title is Home and the same in about page)

`to do this` in the render of the home page we can add another parameter as an object like this

```js
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});
```

and in the home.handlebars file

```html
<title>{{title}}</title>
```

and we can pass more than one parameter for example

```js
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', name: 'kinan' });
});
```

and we can use it in the home page

```html
<p>My name is {{name}}</p>
```

## If helper

`for example` we pass those parameters to the home page

```js
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    name: 'kinan',
    age: 35,
    isDisplayName: false,
  });
});
```

in this case I don't want to display the name
`in home.handlebars file`

```handlebars
{{#if isDisplayName}}
  <p>My name is {{name}}</p>
  {{else}}
    <p>No name found!!!!</p>
{{/if}}
```

## unless helper

`That means if the condition is false do something`

- Create another template (dashboard.handlebars) and in index.js add another render

```js
app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    isListEnabled: false,
  });
});
```

and in dashboard.handlebars file

```handlebars
{{#unless isListEnabled}}
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Donate</li>
</ul>

{{/unless}}
```

## each Built-In helper

- Create another template (contact.handlebars) and in index.js add another render

```js
app.get('/each/helper', (req, res) => {
  res.render('contact', {
    people: ['James', 'Peter', 'Morisse', 'Sadrack'],
  });
});
```

and in contact.handlebars file

- `Loop over an array`

```handlebars
<h2>Welcome to the contact page</h2>
{{#each people}}
  <p>{{this}}</p> //or <p>{{.}}</p>
{{/each}}
```

`the third way`

```handlebars
<h2>Welcome to the contact page</h2>
{{#each people as |value key|}}
  <p>{{key}} : {{value}}</p> {{!--hier key is optional--}}
{{/each}}
```

- `Loop over an object`

```js
app.get('/each/helper', (req, res) => {
  res.render('contact', {
    user: {
      username: 'kinan',
      age: 5,
      phone: 46476441,
    },
  });
});
```

```handlebars
{{#each user}}
  <p>{{this}}</p> {{!--}} or {{.}} // return the values--}}
  <p>{{@key}}</p> /{{!--return the keys--}}
{{/each}}
```

`the third way`

```handlebars
{{#each user as |value key|}}
  <p>{{key}} : {{value}}</p>  {{!--return the keys and the values--}}
{{/each}}
```

- `Loop over nested objects`

```js
app.get('/each/helper', (req, res) => {
  res.render('contact', {
    lists: [
      {
        items: ['Mango', 'Banana', 'Pineapple'],
      },
      {
        items: ['Potato', 'Avocado', 'Kiwi'],
      },
    ],
  });
});
```

```handlebars
{{#each lists}}
  {{log this}} {{!--log to see the result in console //returns 2 objects of our array--}}

  //to loop over every object
  {{#each this.items}}
    <p>{{this}}</p>
  {{/each}}
{{/each}}
```

`The best way that we can do that is we can instead of reusing this keyword we can give them a default variable name`

```handlebars
{{#each lists as |xValue xKey|}}
  {{#each xValue.items as |yValue yKey|}} {{!--instead of . you can use /--}}
    <p>{{yValue}}</p>
  {{/each}}
{{/each}}
```

## Create Partials

- `By default Handlebars is expecting to have a folder inside the views called partials`

for example we want to add header and footer to every template (header.handlebars)

```handlebars
<h2>logo</h2>
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

and we add this header to a template and the same with footer

```handlebars
{{> header}}
```

`what if you want the partial to have a different name, we can head over our express handlebars configuration, we want to focus on`

```js
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/new_folder_name'),
    patialsDir: apth.join(__dirname, 'views/new_folder_name'),
  })
);
```

## Change the extention `.handlebars`

- add to engine the property extname: "the new file extention"
- after adding extname property, we want to come over handlebars and change it to the new extention
- change all the files extentions to the new extention

```js
app.engine(
  '.acc',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/new_folder_name'),
    patialsDir: apth.join(__dirname, 'views/new_folder_name'),
    extname: 'acc',
  })
);
```

## Lookup Built in helper

- add lookup.handlebars file to views

```js
app.get('/look', (req, res) => {
  res.render('contact', {
    user: {
      username: 'kinan',
      age: 35,
      phone: 46476441,
    },
    people: ['James', 'Peter', 'Morisse', 'Sadrack'],
  });
});
```

- in lookup.handlebars file

```handlebars
<p>{{lookup user "username"}}</p> {{!--lookup object "key"--}}
<p>{{lookup people 0}}</p> {{!--lookup array index--}}
```

## Create custom Helper

- We want to use the express handlebars package and use a method from call create and this method takes an object
- we can cut every key value inside expbs and pasted into the new function
- take the new variable that we just created and use it in app.engine
- using keyword `heplers` and this is an object and can take an entire list of every single helpers that we would like to create

```js
const hbs = expbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/new_folder_name'),
  patialsDir: apth.join(__dirname, 'views/new_folder_name'),

  //create custom helpers
  helper: {
    calculation: function (value) {
      return value + 7;
    },
    //another way
    list: function (value, options) {
      return (
        '<h2>' + options.fn({ test: value, property: 'something' }) + '</h2>'
      ); //fn takes an object
    },
  },
});
```

```js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
```

- for example I can use `calculation` in any handlebars file

```handlebars
{{calculation 20}}

```

`this is the handlebars in another way`

```handlebars
{{#list title}} // title=value in list function
  {{test}}
  {{property}} // we can access what inside fn() using the key

{{/list}}
```

- we can used it for exmple we want to pass an object `array of people` in the template engine
- I can refer to the people instead of title (in this case the list function will present the people array)

```js
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    name: 'kinan',
    age: 35,
    isDisplayName: false,
    isAgeEnabled: true,
    people: [
      { firstName: 'Yehuda', lastName: 'Katz' },
      { firstName: 'Carl', lastName: 'Lerche' },
      { firstName: 'Alan', lastName: 'Johnson' },
    ],
  });
});
```

```handlebars
{{#list people}}
{{test}}

{{/list}}

```

```js
  helper: {
    list: function (value, options) {
      //value = people
     let out = "<ul>"
     for(let i=0; i<value.length; i++){
       out = out + "<li>" + options.fn(value[i]) + "</li>";
     }
     return out + "</ul>"
    },
  },
});
```

```handlebars
{{#list people}}
  {{firstName}} {{lastName}}
{{/list}}

```

## {{}} vs {{{}}}

`for example` we add a property `test` with a value as html code

```js
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    name: 'kinan',
    age: 35,
    isDisplayName: false,
    isAgeEnabled: true,
    people: [
      { firstName: 'Yehuda', lastName: 'Katz' },
      { firstName: 'Carl', lastName: 'Lerche' },
      { firstName: 'Alan', lastName: 'Johnson' },
    ],
    test: '<h3>Welcome!</h3>',
  });
});
```

```handlebars
{{test}} {{! will render the tag itself}}
{{{test}}}{{! will render the result}}
{{! this is a comment}}
{{!-- this is another comment --}}
```

## With Built in Helpers

`we want to add author to dashboard`

```js
app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    isListEnabled: false,
    author: {
      firstName: 'Peter',
      lastName: 'James',
      project: {
        name: 'Build Random Quote',
      },
    },
  });
});
```

`in dashboard.handlebars`

```handlebars
{{#with author}}
  <h2>My Name is : {{firstNaame}} {{lastName}}</h2>
  <p>My first project was {{project.name}}</p>
{{/with}}
```

`or`

```handlebars
{{#with author as |x|}}
  <h2>My Name is : {{x.firstNaame}} {{x.lastName}}</h2>
  <p>My first project was {{x.project.name}}</p>
{{/with}}
```

## Multiple CSS Files

- in the root folder create a folder public inside it another folder called css and inside this folder we put our css files (a file for every template)

```js
const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static('public')); //look for a folder
```

- add a property style in the render

```js
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    name: 'kinan',
    style: 'home.css',
    age: 35,
    isDisplayName: false,
    isAgeEnabled: true,
    people: [
      { firstName: 'Yehuda', lastName: 'Katz' },
      { firstName: 'Carl', lastName: 'Lerche' },
      { firstName: 'Alan', lastName: 'Johnson' },
    ],
  });
});
```

- add a link in the default layouts file (main.handlebars)

```html
<link rel="stylesheet" href="css/{{style}}" />
```
