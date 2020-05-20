import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {/* <p>{this.props.bodytitle}</p> */}
            </header>
        )
    }
}

export default Header
