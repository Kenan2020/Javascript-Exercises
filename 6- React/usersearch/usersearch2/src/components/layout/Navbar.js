import React, { Component } from 'react';

class Navbar extends Component {
  static defaultProps = {
    title: 'User Search',
    icon: 'fas fa-home'
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
