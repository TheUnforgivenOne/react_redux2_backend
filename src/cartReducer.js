import * as actionTypes from "./actionsTypes";

const initialState = {
  products: {},
  price: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const product = action.payload;
      const maxAmount = product.amount;

      let productsInCart = state.products[product.name] || 0;
      if (productsInCart < maxAmount) {
        return {
          products: { ...state.products, [product.name]: productsInCart += 1 },
          price: state.price += product.price
        }
      }

      return state;
    case actionTypes.REMOVE_FROM_CART:
      const productToDelete = action.payload;
      let productsLeftInCart = state.products[productToDelete.name];
      const newState = {
        products: {...state.products, [productToDelete.name]: productsLeftInCart -= 1},
        price: state.price -= productToDelete.price
      }

      if (productsLeftInCart < 1) {
        delete newState.products[productToDelete.name];
      }

      return newState;
    default:
      return state;
  }
};

export default cartReducer;
