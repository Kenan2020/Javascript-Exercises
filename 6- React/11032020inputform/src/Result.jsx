import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Result extends Component {
    render() {
        return (
            <div>
                <h2>Your details are: </h2>
                <h4>Email: <span>{this.props.Values.email}</span> </h4>
                <h4>Password: <span>{this.props.Values.password}</span> </h4>
            </div>
        )
    }
}

export default Result
