import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios"
import './App.css';
import AddPost from './AddPost';
import Content from "./Content.jsx"

class App extends Component {
  state={
    posts: []
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Redux-React example</h2>
        
      </header>
      <AddPost />
      <Content />
      
    </div>
    
  )
  }
}
  

export default App;
