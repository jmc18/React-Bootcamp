import React, { useContext } from 'react'

//Context
import CartContext from '../context/Cart/CartContext'

import { Helmet } from '../components'
import { Button, CartItem, NotFound } from '../components/common'

const Cart = () => {
  const cartContext = useContext(CartContext)
  return (
    <Helmet title="Shopping Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Products Added To Your List</p>
          </div>
          <div className="cart__info__total">
            <Button animate={false} size="block">
              Total: $
            </Button>
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
