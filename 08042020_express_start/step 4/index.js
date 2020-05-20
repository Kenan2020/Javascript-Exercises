const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const exphbs = require("express-handlebars")
members = require("./Members")

const logger = require("./middleware/logger")

//initialize a variable calledd app as an instance object of express
const app = express()


//use your middleware function
//app.use(logger)

//handlebars middleware
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")



//Body Parser Middleware
app.use(express.json()) //to parse the request body "raw json"
app.use(express.urlencoded({
    extended: false
})) //to parse the request URL : [options] : {extended: false} //https://expressjs.com/en/api.html#express.urlencoded
//Hmepage Route
app.get("/", (req, res) => {
    res.render("index", {
        title: "Add Member",
        members: members
    })
})
//Member API Routers
app.use("/api/members", require("./routes/api/members"))

//set static folder : use method is for using a middleware
//app.use(express.static("public"))



dotenv.config()
PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))