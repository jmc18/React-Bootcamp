import React, { useContext, useMemo } from 'react'

//Context
import CartContext from '../context/Cart/CartContext'

import { Helmet } from '../components'
import { Button, CartItem, NotFound, Grid, CheckOutForm } from '../components/common'

import numberWithCommas from '../utils/numberWithCommas'
import { CHECKOUT } from '../utils/constants'

const CheckOut = () => {
  const cartContext = useContext(CartContext)

  const totalCalculation = () => {
    let total = 0
    cartContext.state.items.forEach((item) => {
      total += item.unitPrice * item.quantity
    })
    return numberWithCommas(total)
  }

  const total = useMemo(() => totalCalculation(), [cartContext.state])
  return (
    <Helmet title="Checkout">
      <div className="cart" style={cartContext.state.items.length > 4 ? { height: 'auto' } : null}>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Check Out Your Purchase</p>
          </div>
          <CheckOutForm />
        </div>

        {cartContext.state.items.length > 0 ? (
          <div className="cart__list">
            {cartContext.state.items.map((item) => (
              <CartItem item={item} key={item.productId} viewType={CHECKOUT} />
            ))}
            <div className="cart__list__total">
              <span>
                Total: <strong>${total}</strong>
              </span>
            </div>
          </div>
        ) : (
          <NotFound text="You have no products added to your shopping cart" />
        )}
      </div>
    </Helmet>
  )
}

export default CheckOut
