import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Users from './components/users/Users.jsx';
import axios from "axios"

class App extends Component {//sub and super
  //having one state for our all react application
  // constructor(){
  //   super()
  //   this.state = {
  //   }
  state = {
    users: [],
    loading: false
  }
  
  async componentDidMount(){
    this.setState({loading : true})
    const APIKey = process.env.REACT_APP_CLIENT_ID
    const APISecret = process.env.REACT_APP_CLIENT_SECRET
    console.log(APIKey);
    const res = await axios.get(`https://api.github.com/users?client_id=${APIKey}&client_secret=${APISecret}`)//create a promise
          //.then(res => console.log(res.data))
          //console.log(res.data);
          this.setState({users : res.data})
          console.log(this.state.users);
          this.setState({users: res.data, loading : false})
  }
  render() {
    return (
      <div>
        <Navbar />
        <Users loading = {this.state.loading} users = {this.state.users}/>
      </div>
    );
  }
}

export default App;
