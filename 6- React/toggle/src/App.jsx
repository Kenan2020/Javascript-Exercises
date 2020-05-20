import React, {Fragment, Component} from 'react';
import Light from "./Light"
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = { isToggleOn : true }
  // } or
  state = { isToggleOn : true }
  changeToggle = ()=>{
    this.setState(x => ({//x is the current state
        isToggleOn : !x.isToggleOn
    }))
  }
  render(){
    return (
    <Fragment>
     <button onClick={this.changeToggle}>
      {this.state.isToggleOn ? "ON" : "OFF"}
     </button>
      <Light isToggleOn={this.state.isToggleOn} />
      
    </Fragment>
  );
  }
  
}

export default App;
