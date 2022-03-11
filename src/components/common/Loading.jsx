import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../assets/images/logo.webp'

const Loading = ({text}) => {
  return (
    <div className='loading-section'>
        <img src={logo} alt="" />
        <span>{text}</span>
    </div>
  )
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Loading