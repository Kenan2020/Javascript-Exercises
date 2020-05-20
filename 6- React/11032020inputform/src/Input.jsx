import React, { Component } from 'react'

class Input extends Component {
    state = {
        email: "",
        password: ""
    }
    
    submitHandler = (e) =>{
         this.props.addValues(e)
    }

    render() {
        return (
            <form className="form" onSubmit = {this.submitHandler}>
                <input type="email"
                value={this.state.email}
                name="email"
                placeholder="Enter Email" onChange={this.changeHandler}/>
                <input type="password"
                value={this.state.password}
                name="password"
                placeholder="Enter Password" onChange={this.changeHandler}/>

                <input className="btn btn-dark btn-block" type="submit" value="Submit"/>
            </form>
        )
    }
}


export default Input
