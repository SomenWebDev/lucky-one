import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const { name, price, image, id } = product;
  return (
    <div>
      <div className="card my-3" style={{ width: "18rem" }}>
        <img className="card-img-top p-2" src={image} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Product Id: {id}</p>
          <p className="card-text">Product Name: {name}</p>
          <p className="card-text">Product Price: ${price}</p>
          <button onClick={() => handleAddToCart(product)} className="rounded">
            ADD TO CART <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
