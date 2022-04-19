import * as actionTypes from "./actionsTypes";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCTS_PENDING });

  const response = await fetch('http://localhost:4000/products').then((res) => res.json());

  dispatch({ type: actionTypes.GET_PRODUCTS_FULFILLED, payload: response.data });
}

export const addProduct = (product) => async (dispatch) => {
  const response = await fetch(
    'http://localhost:4000/products/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }
  ).then((res) => res.json());

  if (response.status === 'ok') {
    dispatch({ type: actionTypes.ADD_PRODUCT, payload: product });
  }
}
