import React from 'react'
import PropTypes from 'prop-types'


const Button = (props) => {    
    return (
        <button
                className={"px-5 py-3 text-sm shadow-sm font-medium traking-wider rounded-md  mx-auto border rounded-full text-white hover:shadow-lg focus:outline-none " + props.styleClass}
                onClick={props.handleClick}
        >
                {props.children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    styleClass: PropTypes.string
}

export default Button