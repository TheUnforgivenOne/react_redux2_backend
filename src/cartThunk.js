import * as actionTypes from "./actionsTypes";

export const buyProducts = (cart) => async (dispatch) => {
  const response = await fetch(
    'http://localhost:4000/products/buy',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    }
  ).then((res) => res.json());

  dispatch({ type: actionTypes.CLEAR_CART });
  dispatch({ type: actionTypes.GET_PRODUCTS_FULFILLED, payload: response.data });
}
