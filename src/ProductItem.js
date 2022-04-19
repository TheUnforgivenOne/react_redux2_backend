import React from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from "./actionsTypes";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  }

  const removeFromCart = () => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product });
  }

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        margin: "1rem 0",
        padding: "1rem",
      }}
    >
      <b>{product.name}</b>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px"
        }}
      >
        <span>Price: {product.price}</span>
        <span>Amount: {product.amount}</span>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>-</button>
      </div>
    </div>
  );
};

export default ProductItem;
