import React from 'react'
import PropTypes from 'prop-types'



const Body = props=> {
    
        return (
            <form onSubmit={props.submitHandler}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <input type="submit" value="Submit" />
            </form>
        )
    
}

Body.propTypes={
    submitHandler: PropTypes.func.isRequired,
}
export default Body
