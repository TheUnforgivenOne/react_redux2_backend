import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";
import { fetchProducts } from "./productsThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <AddProduct />
      <ProductsList />
    </>
  );
}

export default App;
