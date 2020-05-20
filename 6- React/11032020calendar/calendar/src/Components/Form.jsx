import React, { Component } from 'react';

class Form extends Component {
  state = {
    month: '',
    year: ''
  };
  
  changeHandler = (e) =>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  submitHandler = (e) =>{
      this.props.addValues(e)
  }

  render() {
    return (
      <form onSubmit = {this.submitHandler} className='form-inline'>
        <input
          onChange={this.changeHandler}
          className='form-control mr-2'
          placeholder='Enter the month'
          name='month'
          value={this.state.month}
        />
        <input
          onChange={this.changeHandler}
          className='form-control mr-2'
          placeholder='Enter the year'
          name='year'
          value={this.state.year}
        />
        <input type='submit' className='btn btn-outline-dark' value='Submit' />
      </form>
    );
  }
}

export default Form;
