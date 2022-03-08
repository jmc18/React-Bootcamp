import React from 'react'
import PropTypes from 'prop-types'

const Helmet = ({title, children}) => {
    document.title = `My Eccomerce - ${title}`
  return (
    <>
        {children}
    </>
  )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Helmet