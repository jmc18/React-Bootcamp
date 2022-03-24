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

  const updateQuantityProduct = (quantity, productId) => {
    const product = state.items.find((e) => e.productId === productId)
    if (product) {
      const products = state.items.filter((e) => e.productId !== product.productId)
      products.push({ ...product, quantity })
      dispatch({
        type: CartActions.UPDATE_PRODUCT,
        payload: products
      })
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    }
  }

  const removeProduct = (productId) => {
    dispatch({
      type: CartActions.REMOVE_PRODUCT,
      payload: state.items.filter((e) => e.productId !== productId)
    })
    localStorage.setItem('cartItems', JSON.stringify(state.items))
  }

  const cartContextValue = {
    state,
    addProduct,
    updateQuantityProduct,
    removeProduct
  }
  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
}

export default CartState
