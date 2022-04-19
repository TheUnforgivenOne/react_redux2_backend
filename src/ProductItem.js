import React from "react";

const ProductItem = ({ id, name, price, amount }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        margin: "1rem 0",
        padding: "1rem",
      }}
    >
      <b>{name}</b>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px"
        }}
      >
        <span>Price: {price}</span>
        <span>Amount: {amount}</span>
        <button onClick={() => {}}>+</button>
      </div>
    </div>
  );
};

export default ProductItem;
