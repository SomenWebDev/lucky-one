import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      {cart.map((element) => (
        <div>
          {element.name}
          <h1>{element.length}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cart;
