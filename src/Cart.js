import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { buyProducts } from "./cartThunk";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const buyProductsFromCart = () => {
    dispatch(buyProducts(cart));
  };

  return (
    <div>
      <h2>Cart:</h2>
      <span>Total: {cart.price}</span>
      {Object.entries(cart.products).map(
        ([name, amount]) => <CartItem key={name} name={name} amount={amount} />
      )}
      <button onClick={buyProductsFromCart}>Buy</button>
    </div>
  );
};

export default Cart;
