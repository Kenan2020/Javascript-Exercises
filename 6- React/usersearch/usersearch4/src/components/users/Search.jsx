import React, { Component } from 'react'
import PropTypes from "prop-types"

class Search extends Component {
    state = {
        text: ""
    }
    static propTypes = {
        searchValue: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }

    changeHandler = e =>{
        this.setState({
            // where the event will happend give me the name as a key of the object
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e)=>{
        e.preventDefault()
        this.props.searchValue(this.state.text)
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <>
            <form className="form" onSubmit={this.submitHandler}>
                {/* to lock the input value={this.state.text}*/}
                <input type="text"
                value={this.state.text}
                name="text"
                placeholder="Search Users ..." onChange={this.changeHandler}/>
                <input className="btn btn-dark btn-block" type="submit" value="Search"/>
            </form>
            {this.props.showClear && (<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>)}
            
            </>
        )
    }
}

export default Search
