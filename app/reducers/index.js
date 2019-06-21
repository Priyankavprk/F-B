
const initialState = {
  totalCost: 0,
  cartItems: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        totalCost: action.price,
        cartItems: Object.assign({}, state.cartItems, action.items)
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
