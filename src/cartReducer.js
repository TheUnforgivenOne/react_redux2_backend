import * as actionTypes from "./actionsTypes";

const initialState = {
  products: {},
  price: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productToAdd = action.payload;
      const maxAmount = productToAdd.amount;

      let productsInCart = state.products[productToAdd.name] || 0;
      if (productsInCart < maxAmount) {
        return {
          products: { ...state.products, [productToAdd.name]: productsInCart += 1 },
          price: state.price += productToAdd.price
        }
      }

      return state;
    case actionTypes.REMOVE_FROM_CART:
      const productToDelete = action.payload;
      let productsLeftInCart = state.products[productToDelete.name];

      if (productsLeftInCart !== undefined) {
        if (productsLeftInCart === 1) {
          const newState = {
            ...state,
            price: state.price -= productToDelete.price
          };
          delete newState.products[productToDelete.name];

          return newState;
        }

        return {
          products: {...state.products, [productToDelete.name]: productsLeftInCart -= 1},
          price: state.price -= productToDelete.price
        };
      }

      return state;
    case actionTypes.CLEAR_CART:
      return {
        products: {},
        price: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
