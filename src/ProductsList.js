import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  return (
    <div style={{
      width: "300px"
    }}>
      <h2>Products:</h2>
      {products.loading
        ? <div>Loading...</div>
        : !products.items.length
          ? <div>No goods yet</div>
          : products.items.map(
            (product) => <ProductItem key={product.id} product={product}/>
          )
      }
    </div>
  );
};

export default ProductsList;
