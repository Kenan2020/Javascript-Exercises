const express = require("express")
const dotenv = require("dotenv")
const exphbs = require("express-handlebars")
const books = require("./Books")


const app = express()

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get("/", (req, res) => {
    res.render("index", {
        title: "Add Book",
        books: books
    })
})

app.use("/api/books", require("./routes/api/books"))

dotenv.config()
PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))