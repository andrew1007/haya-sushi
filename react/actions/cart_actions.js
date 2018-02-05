export const GET_CART = 'GET_CART'

export const getCart = _ => dispatch => {
  return ApiCartGetRequest().then(cart => {
    return dispatch(actionCreatorCartGet(cart))
  })
}

export const createCartItem = cartItemId => dispatch => {
  return ApiCartCreateRequest(cartItemId).then(cart => {
    return dispatch(actionCreatorCartGet(cart))
  })
}

export const deleteCartItem = itemId => dispatch => {
  return ApiCartDeleteRequest(itemId).then(cart => {
    return dispatch(actionCreatorCartGet(cart))
  })
}

const actionCreatorCartGet = cart => {
  return {
    type: GET_CART,
    ...cart
  }
}

export const ApiCartGetRequest = _ => {
  return $.ajax({
    method: 'GET',
    url: '/api/cart'
  })
}

export const ApiCartCreateRequest = cartItemId => {
  return $.ajax({
    method: 'POST',
    url: '/api/cart',
    data: cartItemId
  })
}

export const ApiCartDeleteRequest = cartItemId => {
  return $.ajax({
    method: 'DELETE',
    url:'/api/cart',
    data: cartItemId
  })
}
