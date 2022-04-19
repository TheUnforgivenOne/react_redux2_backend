import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { fetchProducts } from "./productsThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <AddProduct />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem"
      }}>
        <ProductsList />
        <Cart />
      </div>
    </>
  );
}

export default App;
