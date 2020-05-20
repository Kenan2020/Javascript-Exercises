import React, { Component } from 'react';
import Button from './Button.jsx';
import { Redirect } from 'react-router-dom';

class Navbar extends Component {
  state = {
    toForm: false,
  };
  clickHandler = () => {
    //your code
    this.setState = {
      toForm: true,
    };
  };

  render() {
    if (this.state.toForm === true) {
      return <Redirect to='/FormUserDetails' />;
    }
    return (
      <nav className='navbar navbar-light justify-content-end sticky-top'>
        <Button value='Log In' className='btn btn-outline-primary m-2' />
        <Button
          value='Sign Up'
          className='btn btn-outline-primary m-2'
          clickHandler={this.clickHandler}
        />
      </nav>
    );
  }
}

export default Navbar;
