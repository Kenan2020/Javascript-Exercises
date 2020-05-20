import React, { Component } from 'react';
import Layer from "./Layer.jsx"
import Result from "./Result.jsx"

import './App.css';

class App extends Component {
  state = {
    email: "",
    password: ""
  }
  changeHandler = e =>{
        
    this.setState({
        [e.target.name]: e.target.value
    })
}

  render(){

    return (
    <>
      <Layer changeHandler={this.handlingFunc} />
      <Result Values={this.state}/>
    </>
      
    
  )
  }
  
};

export default App;
