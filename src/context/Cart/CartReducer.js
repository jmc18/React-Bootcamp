import * as CartActions from './CartActions'

const CartReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case CartActions.ADD_PRODUCT:
      return {
        ...state,
        payload
      }
    case CartActions.UPDATE_PRODUCT:
      return {
        ...state,
        items: payload
      }
    case CartActions.REMOVE_PRODUCT:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}

export default CartReducer
