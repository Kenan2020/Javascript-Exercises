import React, { Component } from 'react'
import lightOff from "./bulboff.gif"
import lightOn from "./bulbon.gif"

class Light extends Component {
    // state = { isToggleOn : true }
    // changeImage = ()=>{
    // this.setState(x => ({
    //     isToggleOn : !x.isToggleOn
    // }))
  //}
    render() {
        return (
            <img width="100"
                height="180"
                //src={this.state.isToggleOn ? lightOn : lightOff}

                src={this.props.isToggleOn ? lightOn : lightOff}
                onClick={this.changeImage}/>
        )
    }
}

export default Light
