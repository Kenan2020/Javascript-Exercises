const express = require("express")
const router = express.Router()
let books = require("../../Books")
const uuid = require("uuid")


router.get("/", (req, res) => {
    res.json(books)
})

router.get("/:id", (req, res) => {

    const result = books.filter(book => {
        return (book.id === parseInt(req.params.id))
    })
    if (result.length) {
        res.json(result)
    } else {
        res.status(404).json({
            msg: `Book with id ${req.params.id} not found!`
        })
    }
})
//Add a book
router.post("/", (req, res) => {
    const newBook = {
        id: uuid.v4(),
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn
    }
    if (!newBook.title || !newBook.title || !newBook.isbn) {
        return res.status(400).json({
            msg: "Please add title, Author and #ISBN"
        })
    }
    books.push(newBook)
    res.redirect("/")
})



//delete book
router.delete("/:id", (req, res) => {
    const found = books.some(book => (book.id === parseInt(req.params.id)))

    if (found) {
        books = books.filter(book => (book.id !== parseInt(req.params.id)))
        res.json(books)

    } else {
        res.status(404).json({
            msg: `Book with id ${req.params.id} could not be found!`
        })
    }
})

module.exports = router