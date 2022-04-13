import React from 'react'
import PropTypes from 'prop-types'

import { ErrorBoundary } from './'

const Helmet = ({ title, children }) => {
  document.title = `My Eccomerce - ${title}`
  return <>{children}</>
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired
}

export default Helmet
