import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      {cart.map((element) => (
        <div>{element.name}</div>
      ))}
    </div>
  );
};

export default Cart;
