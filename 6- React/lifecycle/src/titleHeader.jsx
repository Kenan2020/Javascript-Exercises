import React, { Component } from 'react';

class titleHeader extends Component {
  state = {
    title: '',
  };
  //https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  static getDerivedStateFromProps(props, state) {
    //1
    console.log('sync state with props');
    console.log('current state', state.title);
    console.log('new props', props.newTitle);
    if (state.title !== props.newTitle) {
      return {
        title: props.newTitle,
      };
    } else {
      return null;
    }
  }
  //https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    //3
    console.log('component did mount');
    let header = document.querySelector('h1');
    header.style.background = 'yellow';
  }
  //https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate() {
    //3
    console.log('component did update');
    let header = document.querySelector('h1');
    header.style.background = 'green';
  }
  //https://reactjs.org/docs/react-component.html#componentwillunmount
  componentWillUnmount() {
    console.log('component will unmount');
    alert('component will unmount');
    this.setState({
      title: '',
    });
  }
  render() {
    //2
    console.log('component is renderd', this.state.title);
    return <h1>{this.state.title}</h1>;
  }
}

export default titleHeader;
