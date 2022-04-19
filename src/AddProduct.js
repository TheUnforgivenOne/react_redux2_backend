import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsThunk";
import { v4 as genId } from 'uuid';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updatePrice = (e) => {
    const newPrice = e.target.value;
    if (newPrice === '' || new RegExp(/^[0-9\b]+$/).test(newPrice)) {
      setPrice(Number(newPrice));
    }
  }

  const updateAmount = (e) => {
    const newAmount = e.target.value;
    if (newAmount === '' || new RegExp(/^[0-9\b]+$/).test(newAmount)) {
      setAmount(Number(newAmount));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ id: genId(), name, price, amount }));

    setName('');
    setPrice('');
    setAmount('');
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" value={name} onChange={updateName} />
      </div>
      <div>
        <label htmlFor="price">Product price:</label>
        <br />
        <input type="text" name="price" value={price} onChange={updatePrice} />
      </div>
      <div>
        <label htmlFor="amount">Product amount:</label>
        <br />
        <input type="text" name="amount" value={amount} onChange={updateAmount} />
      </div>
      <br />
      <button type="submit" onClick={onSubmit}>
        Add new product
      </button>
    </form>
  );
};

export default AddProduct;
