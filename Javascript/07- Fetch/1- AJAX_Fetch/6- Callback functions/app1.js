let book1 = {
    title : 'JavaScript',
    author : 'Brad Pitt'
}
let book2 = {
  title : 'JSON',
  author : 'Jason'
}
let library = [book1, book2]
writeBook = (Author, Title) =>{
    return {title: Title, author: Author}
    //your code
}
function showBooks(){
  //your code
  console.log(library)

}
function addBook(author, title, writeBook, showBooks ){
  library.push(writeBook(author, title))
  showBooks()
}
addBook("someAuthor", "someTitle", writeBook, showBooks)