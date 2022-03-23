import React, { useReducer, useRef, useEffect } from 'react'

import CartContext from './CartContext'
import CartReducer from './CartReducer'
import * as CartActions from './CartActions'

const CartState = ({ children }) => {
  const componentMounted = useRef(true)

  const cartInitialState = {
    items: null,
    isLoading: false
  }

  const [state, dispatch] = useReducer(CartReducer, cartInitialState)

  const initCart = () => {}

  const addProduct = (product) => {}

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
