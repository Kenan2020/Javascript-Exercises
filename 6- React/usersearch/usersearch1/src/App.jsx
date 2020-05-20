import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';

import Users from './components/users/Users.jsx';

class App extends Component {
  sayName = () => 'My name';
  render() {
    const name = 'Kenan Mawlood';
    const loading = false;
    const showName = true;
    const numbers = [1, 2, 3, 4];

    const title = 'User Search';
    //if(loading){
    //return <h2 className="App">loading ...</h2>
    //}else{
    return (
      <div className='App'>
        {/* <header className="App-header">
      {loading ? <h4>loading ...</h4> : <h1>Hello {showName && name}</h1>}
      <button>OK</button>

    {/* <h2>{2+4}{name}{this.sayName()}</h2> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
      <div className="App-body">body</div>
      <footer className="App-footer">footer</footer> */}
        {/* <Navbar phrase = {title} icon ="fab fa-github"/> */}
        {/* <Navbar title = "first" />
      <Navbar title = "second" />
      <Navbar anotherthing = "something" /> */}
        <Navbar title={numbers} />
        <Navbar mostafa='ddr4' />
        <Navbar icon='fa fa-facebook' />

        <Users />
        <Users />
        <Users />
      </div>
    );
    //}
  }
}

export default App;
