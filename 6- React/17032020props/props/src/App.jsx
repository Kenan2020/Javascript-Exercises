import React, { Fragment, Component } from 'react';
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"

import './App.css';

class App extends Component {
  state = {
    title : "title",
    footer: "the footer"
  }
  myDef = e =>{
    this.setState=({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return <Fragment>
    <Header title={this.state.title}/>
    <Body changeHandler={this.myDef}/>
    <Footer footer={this.state.footer}/>
  </Fragment>;
  }
  
};

export default App;
