import React, { useState, useRef, useEffect, useContext, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { ProductQuantityControl } from './'

//Context
import CartContext from '../../context/Cart/CartContext'

//utils
import numberWithCommas from '../../utils/numberWithCommas'

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext)
  const itemRef = useRef(null)
  const updateQuantity = (opt) => {
    console.log(opt)
  }

  const removeCartItem = () => {
    console.log('removeCartItem')
    dispatch(removeItem(item))
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
            Subtotal: <strong>${numberWithCommas(item.unitPrice)}</strong>
          </p>
        </div>
        <div className="cart__item__info__quantity">
          <ProductQuantityControl quantity={item.quantity} updateQuantity={updateQuantity} />
        </div>
        <div className="cart__item__info__remove">
          <i className="bx bxs-trash" />
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
