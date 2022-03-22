import React from 'react'
import PropTypes from 'prop-types'

const ProductDescription = ({ isMobile, title, info }) => {
  return (
    <div className={`product-description expand ${isMobile && 'mobile'}`}>
      <div className="product-description__title">{title}</div>
      <div className="product-description__content" dangerouslySetInnerHTML={{ __html: info }} />
    </div>
  )
}

ProductDescription.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired
}

export default ProductDescription
