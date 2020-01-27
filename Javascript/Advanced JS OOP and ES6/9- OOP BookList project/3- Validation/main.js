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
//Give Validation feedback
UI.prototype.showAlert = function(message, className){
    /*
        - create a div
        - add classes
        - add the text
        - append
            1- get parent
            2- insert the added div
    */
    const div = document.createElement("div")
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector(".container")
    const form = document.querySelector("#book-form")

    container.insertBefore(div, form)
    //timeout after 3 sec
    setTimeout(() => {
        div.remove()
    }, 3000);
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
    //Validation
    if(title ==="" || author ==="" || isbn ===""){
        //show error feedback
        ui.showAlert("Please fill in all the fields", "error")
    }else{

    //add book to list
    ui.addBookToList(book)

    //Clear fields
    ui.clearFields()
    //show success feedback
    ui.showAlert("The Book Added Successfully", "success")
    }
    e.preventDefault()
})

/////////delete event listener////////////
document.getElementById("book-list").addEventListener("click", function(e){
    //Int UI
    const ui = new UI()

    //delete book
    ui.deleteBook(e.target)
    //show feedback
    ui.showAlert("The Book Removed Successfully", "success")

    e.preventDefault()
})
