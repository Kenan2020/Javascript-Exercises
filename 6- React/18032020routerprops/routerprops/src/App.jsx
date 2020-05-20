import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css';

const Home = ({inpValue})=>(
<>
<h1>Home</h1>
<Link to="cat1" style={{display:"block", textDecoration: "none"}}>category1</Link>
<Link to="cat2" style={{display:"block", textDecoration:"none"}}>category2</Link>
<Link to="cat3" style={{display:"block", textDecoration:"none"}}>category3</Link>
<ul>
  <li>{inpValue.name}</li>
  <li>{inpValue.email}</li>
</ul>


</>)
const About = ()=>(
<>
<h1>About</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea ipsam quidem aut maxime, eius voluptate voluptas, delectus cum corporis inventore minima a vel quaerat sequi id necessitatibus quos labore?</p>
</>)
const Contact = ()=>(
  <>
<h1>Contact</h1>
<form onClick={this.submitHandler}>
  <label style={{margin:"10px"}}>Name:</label>
  <input type="text" name="name" placeholder="Enter your name" style={{margin:"10px"}}/><br/>
  <label style={{margin:"10px"}}>E-Mail:</label>
  <input type="email" name="email" placeholder="Enter your email" style={{margin:"10px"}}/>
  <input type="submit" value="submit" style={{display:"block", margin:"10px"}}/>
</form>

</>)


class App extends Component {
  state={
    name:"",
    email:""
  }
  submitHandler = e =>{
    e.preventDefault()
    this.setState({
      name: e.target.name.value,
      email: e.target.email.value
    })
  }
  render(){
    return(
    <Router>
      <Fragment>
        <Link to="/" style={{margin:"10px", textDecoration:"none"}}>Main</Link>
        <Link to={{pathname: "/about"}} style={{margin:"10px", textDecoration:"none"}}>About Us</Link>
        <Link to={{pathname: "/contact"}} style={{margin:"10px", textDecoration:"none"}}>Contact Us</Link>
        <hr/>
        <Switch>
          <Route exact path="/" component={()=>(<Home inpValue={this.state} />)} />
          <Route path="/about" component={About} />
          <Route path="/contact" render={props =>(<Contact submitHandler={this.submitHandler} />)}/>
        </Switch>
      </Fragment>
  </Router>
  ) 
  }
  
};

export default App;
