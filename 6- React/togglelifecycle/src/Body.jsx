import React, { Component } from 'react';
import lightOff from './bulboff.gif';
import lightOn from './bulbon.gif';

class Body extends Component {
  state = {
    show: false,
    x: 'another',
  };
  static getDerivedStateFromProps(props, state) {
    if (state.show !== props.isShow) {
      return {
        show: props.isShow,
      };
    } else {
      return null;
    }
  }
  componentDidMount() {
    let image = document.querySelector('img');
    image.style.border = '1px solid #080';
    image.style.borderRadius = '10%';
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    console.log('component is renderd', this.state.title);
    return (
      <img
        width='100'
        height='180'
        src={this.state.show ? lightOn : lightOff}
      />
    );
  }
}

export default Body;
