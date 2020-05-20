import React from 'react'
import PropTypes from 'prop-types'

const Alert = (props)=> {

    return (
        props.alert !== null && (<div className={`alert-${alert.type}`}>
            <a href="#" onClick={props.removeAlert}>
                <i className={"fas fa-info-circle"}>{alert.msg}</i>
            </a>
            
        </div>)
        
    )
}
Alert.propTypes = {
    alert : PropTypes.object.isRequired,
    removeAlert : PropTypes.func.isRequired,
}

export default Alert
