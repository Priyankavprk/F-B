
const initialState = {
  foodList: {}
}

export default function reducer(state = initialState, action) {
  console.log('/////',state)
  switch (action.type) {
    case 'GET_DATA_SUCCESS': 
      return { ...state, foodList: action.data.FoodList };

    default:
      return state;
  }
}
