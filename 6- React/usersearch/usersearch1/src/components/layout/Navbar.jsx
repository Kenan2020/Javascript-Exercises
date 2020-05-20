import React, { Component } from 'react'
import PropTypes from "prop-types"

class Navbar extends Component {
    //defining a default props
    static defaultProps={
        title: "Search for User",
        icon: "fab fa-github"
    }
    //defining the type of my props
    static propTypes = {
        title: PropTypes.array.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        console.log(this.props)
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}></i>
                    {this.props.title}
                </h1>
        <p>{this.props.mostafa}</p>
        <p>{this.props.anotherthing}</p>
            </nav>
        )
    }
}

export default Navbar
