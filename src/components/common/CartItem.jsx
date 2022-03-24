import React, { useRef, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { ProductQuantityControl } from './'

//Context
import CartContext from '../../context/Cart/CartContext'

//utils
import numberWithCommas from '../../utils/numberWithCommas'

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext)
  const itemRef = useRef(null)

  const subtotalCalculation = () => {
    const subtotal = item.unitPrice * item.quantity
    return numberWithCommas(subtotal)
  }

  const subtotal = useMemo(() => subtotalCalculation(), [item.quantity])

  const updateQuantity = (type) => {
    const stock = item.stock
    const quantity = item.quantity
    const quantityTemp = type === 'plus' ? (quantity + 1 <= stock ? quantity + 1 : quantity) : quantity - 1 < 1 ? quantity : quantity - 1
    if (quantityTemp !== item.quantity) {
      cartContext.updateQuantityProduct(quantityTemp, item.productId)
    }
  }

  const removeCartItem = () => {
    cartContext.removeProduct(item.productId)
  }

  return (
    <div className="cart__item" ref={itemRef}>
      <div className="cart__item__image">
        <img src={item.mainImage} alt={item.productName} />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">{item.productName}</div>
        <div className="cart__item__info__price">
          <p className="cart__item__info__price_unit">
            Unit Price: <strong>${numberWithCommas(item.unitPrice)}</strong>
          </p>
          <p className="cart__item__info__price_subtotal">
            Subtotal: <strong>${subtotal}</strong>
          </p>
        </div>
        <div className="cart__item__info__quantity">
          <ProductQuantityControl quantity={item.quantity} updateQuantity={updateQuantity} />
        </div>
        <div className="cart__item__info__remove">
          <i className="bx bxs-trash" onClick={removeCartItem} />
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
