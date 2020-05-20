import React, { Fragment } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css';

const Home = ()=>(
<>
<h1>Home</h1>
<Link to="cat1" style={{display:"block", textDecoration: "none"}}>category1</Link>
<Link to="cat2" style={{display:"block", textDecoration:"none"}}>category2</Link>
<Link to="cat3" style={{display:"block", textDecoration:"none"}}>category3</Link>



</>)
const About = ()=>(
<>
<h1>About</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea ipsam quidem aut maxime, eius voluptate voluptas, delectus cum corporis inventore minima a vel quaerat sequi id necessitatibus quos labore?</p>
</>)
const Contact = ()=>(
  <>
<h1>Contact</h1>
<label style={{margin:"10px"}}>Name:</label>
<input type="text" placeholder="Enter your name" style={{margin:"10px"}}/><br/>
<label style={{margin:"10px"}}>E-Mail:</label>
<input type="email" placeholder="Enter your email" style={{margin:"10px"}}/>
<input type="submit" value="submit" style={{display:"block", margin:"10px"}}/>
</>)


const App = () => {
  return(
    <Router>
      <Fragment>
        <Link to="/" style={{margin:"10px", textDecoration:"none"}}>Main</Link>
        <Link to={{pathname: "/about"}} style={{margin:"10px", textDecoration:"none"}}>About Us</Link>
        <Link to={{pathname: "/contact"}} style={{margin:"10px", textDecoration:"none"}}>Contact Us</Link>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Fragment>
  </Router>
  ) 
};

export default App;
