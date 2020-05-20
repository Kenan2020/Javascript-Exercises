import React, { Component } from 'react';
import './App.css';
import Body from "./Body"

class App extends Component {
  state = { show: true }
  changeShow = ()=>{
    this.setState(x => ({//x is the current state
        show : !x.show
    }))
  }
  render(){
    return(
  <>
  <button onClick={this.changeShow}>
      {this.state.show ? "ON" : "OFF"}
     </button>
      <Body isShow={this.state.show} />
  </>
  )
  }
  
};

export default App;
