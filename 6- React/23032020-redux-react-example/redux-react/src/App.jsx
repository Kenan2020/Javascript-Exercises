import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts.jsx';
import PostForm from './components/PostForm.jsx';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Redux-React example</h2>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
