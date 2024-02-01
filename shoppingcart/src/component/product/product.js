import React, { useEffect } from "react";
import Productlist from "./productdata";
import { useLocation } from "react-router-dom";
import "./product.css";
const Product = () => {
  useEffect(() => {
    // Your useEffect logic here, if needed
  }, []);

  const location = useLocation();
  const dataid = location.state;

  // Filter the Productlist based on dataid
  const filteredProducts = Productlist.filter((e) => e.id === dataid);

  return (
    <>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.img}
              alt={product.title}
              className="product-image-box"
            />
            <div className="product-details">
              <p>{product.title}</p>
              <p>Autor:{product.author}</p>
              <p>Price:{product.price}₹</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
