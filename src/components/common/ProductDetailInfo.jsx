import React from 'react'
import PropTypes from 'prop-types'

const ProductDetailInfo = ({ title, info }) => {
  return (
    <div className="product-details__info__item">
      {title && <div className="product-details__info__item__title">{title}</div>}
      {info && (
        <div className="product-details__info__item__list">
          <span className="product-details__info__item__list__item__size">{info}</span>
        </div>
      )}
    </div>
  )
}

ProductDetailInfo.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string
}

export default ProductDetailInfo
