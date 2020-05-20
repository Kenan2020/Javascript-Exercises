import React, { Component } from 'react';
import Table from './Components/Table.jsx';
import Form from './Components/Form.jsx';

import './App.css';

class App extends Component {
  state = {
    month: '',
    year: ''
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({ month: e.target.month.value, year: e.target.year.value });
  };
  render() {
    return (
      <div className='container'>
        <Table Values={this.state}/>
        <Form addValues={this.submitHandler} />
      </div>
    );
  }
}

export default App;
