import React from 'react'
import PropTypes from 'prop-types'

const ProductQuantityControl = ({ updateQuantity, quantity, title }) => {
  const handleUpdateQuantity = (action) => {
    updateQuantity(action)
  }

  return (
    <div className="product-details__info__item">
      {title && <div className="product-details__info__item__title">{title}</div>}
      <div className="product-details__info__item__quantity">
        <div className="product-details__info__item__quantity__btn" onClick={() => handleUpdateQuantity('minus')}>
          <i className="bx bx-minus" />
        </div>
        <div className="product-details__info__item__quantity__input">{quantity}</div>
        <div className="product-details__info__item__quantity__btn" onClick={() => handleUpdateQuantity('plus')}>
          <i className="bx bx-plus" />
        </div>
      </div>
    </div>
  )
}

ProductQuantityControl.propTypes = {
  updateQuantity: PropTypes.func,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default ProductQuantityControl
