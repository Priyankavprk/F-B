
const initialState = {
  totalCost: 0,
  cartItems: {}
}

export default function reducer(state = initialState, action) {
  console.log(';;;;;',state)
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        totalCost: action.price,
        cartItems: Object.assign({}, state.cartItems, action.items)
      };
    case 'UPDATE_CART':
      return {
        ...state,
        totalCost: action.price,
        cart: [...action.data]
      };
    case 'SUB_FROM_CART':
      return {
        ...state,
        totalCost: action.price,
        cartItems: action.items
      };
    default:
      return state;
  }
}
