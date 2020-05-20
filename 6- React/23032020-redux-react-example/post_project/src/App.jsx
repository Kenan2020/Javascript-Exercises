import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Posts from './Posts.jsx';
import Postform from './PostForm.jsx';

class App extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({
      posts: res.data
    });
  }
  submitHandler = async e => {
    //handle the submit event in PostForm
    e.preventDefault();
    const res = await axios({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        title: e.target.title.value,
        body: e.target.body.value
      }
    });
    const { posts } = this.state;
    this.setState({
      posts: posts.unshift(res.data)
    });
  };
  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Redux-React example</h2>
        </header>
        <Postform submitHandler={this.submitHandler} />
        <hr />
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
