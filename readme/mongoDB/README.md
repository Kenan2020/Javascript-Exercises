# MongoDB

MongoDB is a document database designed for ease of devlopment and scaling.

## Document Database

A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

```js
{
  name: 'sue',              // field: value
  age:26,                   // field: value
  status:"A",               // field: value
  groups:["news", "sports"] // field: value
}
```

MongoDB stores documents (rows) in `collections`. Collections are analouges to tables in relational databases

| Shell Command                                   | Meaning                                     |
| ----------------------------------------------- | ------------------------------------------- |
| show dbs                                        | display all databases                       |
| db                                              | display the current database                |
| use `<db>`                                      | create or switch to a database              |
| db.createCollection("collection")               | create collection                           |
| show collections                                | to show the collections                     |
| db.`collection`.insert({...})                   | to insert one row into the collection       |
| db.`collection`.insertMany([{...}, {...}, ...]) | to insert multiple rows into the collection |
| db.`collection`.find()                          | select all documents in the collection      |
| db.`collection`.find().pretty()                 | to format the result                        |

- use `<db>` If the database does not exist, MongoDB creates the database when you first store data for that database.
- If a collection does not exist, MongoDB creates the collection when you first store data for that collection.

`for example`

```js
db.inventory.insertMany([
  {
    item: 'journal',
    qty: 25,
    status: 'A',
    size: { h: 14, w: 21, uom: 'cm' },
    tags: ['blank', 'red'],
  },
  {
    item: 'notebook',
    qty: 50,
    status: 'A',
    size: { h: 8.5, w: 11, uom: 'in' },
    tags: ['red', 'blank'],
  },
  {
    item: 'paper',
    qty: 10,
    status: 'D',
    size: { h: 8.5, w: 11, uom: 'in' },
    tags: ['red', 'blank', 'plain'],
  },
  {
    item: 'planner',
    qty: 0,
    status: 'D',
    size: { h: 22.85, w: 30, uom: 'cm' },
    tags: ['blank', 'red'],
  },
  {
    item: 'postcard',
    qty: 45,
    status: 'A',
    size: { h: 10, w: 15.25, uom: 'cm' },
    tags: ['blue'],
  },
]);
```

| Shell Command                              | Meaning                                            |
| ------------------------------------------ | -------------------------------------------------- |
| db.inventory.find({status:"D"})            | return documents where status = "D"                |
| db.inventory.find({qty:0, status:"D"})     | return documents where qty = 0 and status = "D"    |
| db.inventory.find({"size.uom":"in"})       | return document where uom = "in"                   |
| db.inventory.find({tags:["red", "blank"]}) | return documents where tags includes red and blank |

## Specify Fields to Returns (Projection)

To specify fields to return, pass a projection document to the `db.collection.find(<query document>, <projection document>)` method. In the projection document, specify:

- <`field`> : 1 to include a field in the returned documents.
- <`field`> : 0 to exclude a field in the returned documents.

| Shell Command                                     | Meaning                                                             |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| db.inventory.find({}, {item:1, status:1})         | return the id, item and status from all documents in the collection |
| db.inventory.find({}, {\_id:0, item:1, status:1}) | return only item and status from all documents in the collection    |

## Get one row

db.findOne({})
db.topics.find({title:"react js"}, {time:1, chapters:1}) // time or chapters
db.topics.find({title:"react js"}, {time:0, chapters:1})

## delete Database

- db.dropDatabase("")
- db.management.update({ role: 'teachers'},{ $set:{description:'teaching, material preparation'}})
- db.participants.find({qty:{$gt:15}}).forEach(function(doc){db.participants.update({name:"fbw4"},{$set:{assisstant:"moustafa"}})})
- db.participants.find({"assisstant.1":"franco"}).forEach(function(doc){db.participants.update({},{$set:{distribution:true}})})
- $inc
