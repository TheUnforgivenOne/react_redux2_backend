import React from "react";

const CartItem = ({ name, amount }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "1rem 0",
        padding: "1rem"
      }}
    >
      <span>{name}</span>
      <span>Selected: {amount}</span>
    </div>
  );
};

export default CartItem;
