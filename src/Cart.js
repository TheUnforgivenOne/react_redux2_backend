import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart:</h2>
      <span>Total: {cart.price}</span>
      {Object.entries(cart.products).map(
        ([name, amount]) => <CartItem key={name} name={name} amount={amount} />
      )}
    </div>
  )
};

export default Cart;
