import React, { Component } from 'react'



class Body extends Component {
    // state={
    //     inptValue: ""
    // }
    // changeHandler = (e)=>{
    //     this.setState({
    //         inptValue: e.target.value
    //     })
    // }
    render() {
        return (
            <div>
                {/* <Header bodytitle={this.state.inptValue} /> */}
                {/* <input type="text" value={this.state.inptValue} onChange={this.changeHandler} placeholder={this.props.newValue}/> */}
                <input type="text" name="title" onChange={this.props.changeHandler}/>
                <input type="text" name="footer" onChange={this.props.changeHandler}/>
            </div>
        )
    }
}

export default Body
