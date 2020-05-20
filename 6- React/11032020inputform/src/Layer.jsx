import React from 'react'

const Layer =() => {
    return (
        <>
            <input type="email" name="email" onChange={this.props.changeHandler} />   
            <input type="password" name="password" onChange={this.props.changeHandler} />
        </>
    )

}

export default Layer
