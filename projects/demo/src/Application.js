import React, { Component } from 'react';
import HighScore from './HighScore';

class Application extends Component {
  state = {
    count: 0,
    overTen: false,
  };
  handleClick = () => {
    console.log('clicked');
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidUpdate(props, state) {
    console.log(state, this.state);
    console.log('Updated from ', state, 'to ', this.state);
    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.overTen
    ) {
      console.log('Updating over ten!');
      this.setState({ overTen: true });
    }
  }
  resetCount = (e) => {
    console.log('the event is ', e);
    this.setState({
      count: 0,
      overTen: false,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>you clicked the button {count} times</h1>
        <HighScore overTen={this.state.overTen} onReset={this.resetCount} />
        {/* {this.state.overTen ? <h3>Beat hight score of 10!</h3> : null}*/}
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default Application;
