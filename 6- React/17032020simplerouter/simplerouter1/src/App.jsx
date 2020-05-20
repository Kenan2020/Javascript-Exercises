import React, { Fragment } from 'react';
//BrowserRouter is the router implementation for HTML 5 browser
//Link is your replacement for anchor tags.
//Route is the conditionally shown component based on matching a path to a URL.
//Switch returns only the first matching route rather than all matching routes.
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css';

const Home = ()=><h1>Home</h1>
const About = ()=><h1>About</h1>

//We give each route either a target "component", or we can send a function "render"



const App = () => {
  return(
    <Router>
      <Fragment>
        <Link to="/">Main</Link>
        <Link to={{pathname: "/about"}}>About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" render={()=><h1>Contact Us</h1>}/>
        </Switch>
      </Fragment>
  </Router>
  ) 
};

export default App;
