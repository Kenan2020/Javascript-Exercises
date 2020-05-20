//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn
}
//UI Constructor
function UI(){

}

//Add Book to List
UI.prototype.addBookToList = function(book){
    const list = document.querySelector("#book-list")
    //create tr element
    const row = document.createElement("tr")
    //Insert cols
    row.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href='#' class='delete'>x</a></td>`
    list.appendChild(row)
}
//clear fields
UI.prototype.clearFields = function(){
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#isbn").value = ""
}

//delete book
UI.prototype.deleteBook = function(target){
    if(target.className === "delete"){
        
        target.parentElement.parentElement.remove()
    }
}

//Event Listeners
//////add book event listener///////////
document.querySelector("#book-form").addEventListener("submit", function(e){
    //get inputs values
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value

    //Instantiate book
    const book = new Book(title, author, isbn)
    //Instantiate UI
    const ui = new UI();

    //add book to list
    ui.addBookToList(book)

    //Clear fields
    ui.clearFields()

    e.preventDefault()
})

/////////delete event listener////////////
document.getElementById("book-list").addEventListener("click", function(e){
    //Int UI
    const ui = new UI()

    //delete book
    ui.deleteBook(e.target)

    e.preventDefault()
})
