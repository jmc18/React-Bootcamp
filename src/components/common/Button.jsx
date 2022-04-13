import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const bg = props.backgroundColor ? `bg-${props.backgroundColor}` : 'bg-main'
  const size = props.size ? `btn-${props.size}` : ''
  const animate = props.animate ? 'btn-animate' : ''
  const buttonType = props.buttonType ? props.buttonType : 'button'
  const isDisabled = props.isDisabled ? props.isDisable : ''
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      className={`btn ${bg} ${size} ${animate}`}
      onClick={props.handler ? () => props.handler() : null}
    >
      <span className="txt">{props.children}</span>
      {props.icon ? (
        <span className="icon">
          <i className={`${props.icon} bx-tada`} />
        </span>
      ) : null}
    </button>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  handler: PropTypes.func,
  buttonType: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button
