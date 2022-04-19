import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div style={{
      width: "250px"
    }}>
      <h2>Products:</h2>
      {products.loading
        ? <div>Loading...</div>
        : !products.items.length
          ? <div>No goods yet</div>
          : products.items.map(
            ({ id, name, price, amount }) =>
              <ProductItem
                id={id}
                key={id}
                name={name}
                price={price}
                amount={amount}
              />
          )
      }
    </div>
  );
};

export default ProductsList;
