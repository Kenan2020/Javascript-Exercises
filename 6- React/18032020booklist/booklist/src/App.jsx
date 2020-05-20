import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import PropTypes from 'prop-types'

import './App.css';

const Home = books =>(
  
<>
<h1>Home</h1>
<table className="u-full-width">
    <thead>
        <tr>
            <th>book</th>
            <th>Author</th>
            <th>ISBN</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    {/* <tr>
        <th>{books.title}</th>
        <th>{books.author}</th>
        <th>{books.isbn}</th>
        <th></th>
   </tr> */}

    </tbody>
</table>
</>)
Home.propTypes={
  submitHandler: PropTypes.func.isRequired,
}
//localStorage.clear()
class AddBook extends Component{
  state={
      books: []
    }
    addBook = e =>{
      e.preventDefault()
      let book={
        title: e.target.title.value,
        author: e.target.author.value,
        isbn: e.target.isbn.value
      }
      let books;
      if(localStorage.getItem("books") === null){
          books = []
      }else{
          books = JSON.parse(localStorage.getItem("books"))
      }
      books.push(book)
      localStorage.setItem('books',JSON.stringify(books))
      
    }
    
  render(){
    
    return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={this.addBook}>

            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="u-full-width" />
            <label htmlFor="author">Author</label>
            <input type="text" name="author" className="u-full-width" />
            <label htmlFor="isbn">ISBN#</label>
            <input type="text" name="isbn" className="u-full-width" />
            <input type="submit" value="Add Book" className="u-full-width" />
      </form>

    </>
    )
  }
}

//make the app as class and handle the submit and add the books to the state and send it as props to home
class App extends Component{
  render(){
    return(
    <Router>
      <Fragment>
        <Link to="/" style={{margin:"10px", textDecoration:"none"}}>Main</Link>
        <Link to={{pathname: "/AddBook"}} style={{margin:"10px", textDecoration:"none"}}>Add Book</Link>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AddBook" component={AddBook} />
        </Switch>
      </Fragment>
  </Router>
  ) 
  }
  
};

export default App;
