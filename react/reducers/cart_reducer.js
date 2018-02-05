import { GET_CART } from '../actions/cart_actions'

const defaultState = {}

const CartReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_CART:
      const cart = action.cart
      return {...cart}
    default:
      return state
  }
}

export default CartReducer
