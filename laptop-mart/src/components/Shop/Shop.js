import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "./../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    setCart(newCart);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
        <div className="description">
          <div>
            <h1>How useState works?</h1>
            <p>
              useState is a function which allows to have an initial value in a
              function component.useState return a pair of values.This pair of
              values return in array forms and it contains 2 elements.One
              variable is used to have the state value and other one is used to
              update the state.
            </p>
          </div>
          <h1>Difference between Props Vs State.</h1>
          <p>
            Props are short form of Properties.We can think it as a argument of
            the function.Data can be transferred by props from a one component
            to another component.Props are immutable.We can modify the props
            inside the component.
          </p>
          <p>
            States are also plain oject like props.The main difference is we use
            state to change data in the inside component.It is mutable.It can
            not send data to another component and can not be change from
            another component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
