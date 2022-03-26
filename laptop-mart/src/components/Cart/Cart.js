import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
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
