

export function addToCart(price) {
  return(dispatch, getState) => {
    dispatch({
      type: 'ADD_TO_CART',
      price: getState().totalCost + price
    })
  }
}

export function subFromCart(price) {
  return(dispatch, getState) => {
    dispatch({
      type: 'SUB_FROM_CART',
      price: getState().totalCost !== 0 ? getState().totalCost - price : 0
    })
  }
}
