import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      {cart.map((element) => (
        <div>{element.name}</div>
      ))}
      <div>
        <button className="rounded">Choose 1 For Me</button>

        <button className="rounded">Choose Again</button>
      </div>
    </div>
  );
};

export default Cart;
