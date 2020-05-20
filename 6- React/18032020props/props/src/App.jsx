import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Fragment, Component } from 'react';
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"

import './App.css';

class App extends Component {
  state = {
    email : "",
    password: ""
  }
  submitHandler = e =>{
    e.preventDefault()
    this.setState=({
      email: e.target.email.value,
      password: e.target.password.value
    })
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" render={
              props =>(<>
                <Header email={this.state.email}/>
                <Footer password={this.state.password}/>
              </>)
            } />
            <Route path="/body" render={
              props =>
                <Body submitHandler={this.submitHandler}/>
            } />
          </Switch>
        </Fragment>;
      </Router>
    )}
  
};

export default App;
