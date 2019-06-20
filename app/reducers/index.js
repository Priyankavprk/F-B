
const initialState = {
  totalCost: 0,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        totalCost: action.price
      };
    case 'SUB_FROM_CART':
      return {
        ...state,
        totalCost: action.price
      };
    default:
      return state;
  }
}
