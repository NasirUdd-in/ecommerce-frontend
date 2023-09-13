// components/ProductCard.js

import React from "react";
import Button from "react-bootstrap/Button";
function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top"
        style={{ height: "260px" }}
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
      </div>
      <Button variant="primary">Go somewhere</Button>
    </div>
  );
}

export default ProductCard;
