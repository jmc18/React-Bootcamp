import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'

//Context
import CartContext from '../context/Cart/CartContext'

import { Helmet } from '../components'
import { Button, CartItem, NotFound } from '../components/common'

import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {
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
    <Helmet title="Shopping Cart">
      <div className="cart" style={cartContext.state.items.length > 4 ? { height: 'auto' } : null}>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Products Added To Your List</p>
          </div>
          <div className="cart__info__total">
            <Link to="/checkout">
              <Button animate={false} size="block">
                Total: ${total}
              </Button>
            </Link>
          </div>
        </div>

        {cartContext.state.items.length > 0 ? (
          <div className="cart__list">
            {cartContext.state.items.map((item) => (
              <CartItem item={item} key={item.productId} />
            ))}
          </div>
        ) : (
          <NotFound text="You have no products added to your shopping cart" />
        )}
      </div>
    </Helmet>
  )
}

export default Cart
