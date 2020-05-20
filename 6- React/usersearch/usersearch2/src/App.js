import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Body from "./components/layout/Body"

class App extends Component {
  render() {
    //const title = 'User Search';
    return (
      <div>
        <Navbar title='my test' />
        <Body />
      </div>
    );
  }
}

export default App;
