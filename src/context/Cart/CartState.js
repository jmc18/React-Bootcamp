import React, { useReducer, useRef, useEffect } from 'react'

import CartContext from './CartContext'
import CartReducer from './CartReducer'
import * as CartActions from './CartActions'

const CartState = ({ children }) => {
  const componentMounted = useRef(true)

  const cartInitialState = {
    items: localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
  }

  const [state, dispatch] = useReducer(CartReducer, cartInitialState)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items))
  }, [state.items])

  const addProduct = (product) => {
    console.log([...state.items, product])
    dispatch({
      type: CartActions.ADD_PRODUCT,
      payload: sorting([...state.items, product])
    })
  }

  const updateQuantityProduct = (quantity, productId) => {
    const product = state.items.find((e) => e.productId === productId)
    if (product) {
      const products = state.items.filter((e) => e.productId !== product.productId)
      dispatch({
        type: CartActions.UPDATE_PRODUCT,
        payload: sorting([...products, { ...product, quantity }])
      })
    }
  }

  const removeProduct = (productId) => {
    dispatch({
      type: CartActions.REMOVE_PRODUCT,
      payload: sorting(state.items.filter((e) => e.productId !== productId))
    })
  }

  const sorting = (items) => {
    return items?.sort((a, b) => a.productName > b.productName ? 1 :b.productName > a.productName? -1 : 0)
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
