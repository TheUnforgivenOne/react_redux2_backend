import * as actionTypes from "./actionsTypes";

const initialState = {
  loading: false,
  items: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCTS_FULFILLED:
      return {
        loading: false,
        items: action.payload
      };
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default productsReducer;
