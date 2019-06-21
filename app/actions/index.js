

export function addToCart(price, name, num) {
  return(dispatch, getState) => {
    dispatch({
      type: 'ADD_TO_CART',
      price: getState().totalCost + price,
      items: {[name]:[num, price]}
    })
  }
}

export function subFromCart(price, name, num) {
  return(dispatch, getState) => {
    let newItem = {}
    if (getState().cartItems.hasOwnProperty(name)) {
      if (getState().cartItems[name][0] > 1) {
        newItem = Object.assign({}, getState().cartItems, {[name]:[num, price]})
      } else {
        delete getState().cartItems[name]
        newItem = getState().cartItems
      }
    }
    dispatch({
      type: 'SUB_FROM_CART',
      price: getState().totalCost !== 0 ? getState().totalCost - price : 0,
      items: newItem
    })
  }
}
