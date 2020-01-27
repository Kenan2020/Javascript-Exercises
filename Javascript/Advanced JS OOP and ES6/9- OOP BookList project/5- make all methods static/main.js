//Book class
class Book{
    constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn
    }
}
//UI class
class UI{
    addBookToList(book){
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
    clearFields(){
        document.querySelector("#title").value = ""
        document.querySelector("#author").value = ""
        document.querySelector("#isbn").value = ""
    }
    deleteBook(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove()
        }
    }
    static showAlert(message, className){
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
        UI.showAlert("Please fill in all the fields", "error")
    }else{

    //add book to list
    ui.addBookToList(book)

    //Clear fields
    ui.clearFields()
    //show success feedback
    UI.showAlert("The Book Added Successfully", "success")
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
    UI.showAlert("The Book Removed Successfully", "success")

    e.preventDefault()
})
/*
//Static methods
class User{
    static method(){
        return "Hi"
    }
}
//we don't need it 
let user = new User()
console.log(User.method())
*/