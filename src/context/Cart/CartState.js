import React, { useReducer, useRef, useEffect } from 'react'

import CartContext from './CartContext'
import CartReducer from './CartReducer'
import * as CartActions from './CartActions'

const CartState = ({ children }) => {
  const componentMounted = useRef(true)

  const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
  const cartInitialState = {
    items: items
  }

  const [state, dispatch] = useReducer(CartReducer, cartInitialState)

  const addProduct = (product) => {
    dispatch({
      type: CartActions.ADD_PRODUCT,
      payload: state.items.push(product)
    })
    localStorage.setItem('cartItems', JSON.stringify(state.items))
  }

  const updateQuantityProduct = (quantity, productId) => {}

  const removeProduct = (productId) => {}

  const cartContextValue = {
    state,
    addProduct,
    updateQuantityProduct,
    removeProduct
  }
  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
}

export default CartState
