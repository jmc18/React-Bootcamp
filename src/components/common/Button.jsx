import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {

    const bg = props.backgroundColor ? `bg-${props.backgroundColor}` : 'bg-main'
    const size = props.size ? `btn-${props.size}` : ''
    const animate = props.animate ? 'btn-animate' : ''
    return (
        <button
            className={`btn ${bg} ${size} ${animate}`}
            onClick={props.handler ? () => props.handler() : null}
        >
            <span className="txt">{props.children}</span>
            {
                props.icon ? (
                    <span className="icon">
                        <i className={`${props.icon} bx-tada`} />
                    </span>
                ) : null
            }
        </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    handler: PropTypes.func,
}

export default Button