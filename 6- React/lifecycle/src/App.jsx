import React, { Component } from 'react';
import './App.css';
import TitleHeader from "./titleHeader.jsx"

class App extends Component {
  state = {
    value: "default item",
    show: true,
    data: [
      {
        id:1,
        title: "first item"
      },{
        id:2,
        title: "second item"
      },{
        id:3,
        title: "third item"
      }
    ]
  }
  ChangeTitle(title){
    this.setState({
      value: title
    })
  }
  showHandler(){
    this.setState(x =>({//x is the current state
      show: !x.show
    }))
  }
  render(){
    const list = this.state.data.map(item =>{//we use return with arrow funtion because map (map to create a new array)
    return <li key={item.id} onClick={()=>this.ChangeTitle(item.title)}>{item.title}</li>
    })
    return (
      <div className="wrapper">
        {this.state.show ? <TitleHeader newTitle = {this.state.value} /> : null}
        <ul className="list">{list}</ul>
        <button className="btn" onClick={()=>this.showHandler()}>Show and Hide</button>
      </div>
    )
  }
  
};

export default App;
