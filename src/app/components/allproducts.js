"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./productcard";
import axios from "axios"; // Import Axios

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Use Axios to fetch data from your API
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mt-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
