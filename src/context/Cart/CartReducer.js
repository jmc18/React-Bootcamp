import * as CartActions from './CartActions'

const CartReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case CartActions.ADD_PRODUCT:
      return {
        ...state,
        payload
      }
    default:
      return state
  }
}

export default CartReducer
