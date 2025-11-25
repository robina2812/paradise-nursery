import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, decrementQuantity } from "../Store/CartSlice.jsx";
import "../Style/Productcard.css";
import placeholderImage from "../image/Your paragraph text.png"; // fallback image
import { formatCurrency } from "../utils/format.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // 🧩 Safety check to prevent crashing if product is undefined
  if (!product) {
    return (
      <div className="product-card">
        <img
          src={placeholderImage}
          alt="Product not available"
          className="product-img"
        />
        <h3>Product not available</h3>
        <p>--</p>
        <button disabled>Add to Cart</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(decrementQuantity(product.id));
  };

  const handleImgError = (e) => {
    e.currentTarget.src = placeholderImage;
  };

  return (
    <div className="product-card">
      {/* ✅ use placeholder image if product.image is missing */}
      <img
        src={product.image || placeholderImage}
        alt={product.name || "Unnamed Product"}
        onError={handleImgError}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        loading="lazy"
        className="product-img"
      />
      <h3>{product.name || "Unnamed Product"}</h3>
      <p>{product.price ? formatCurrency(product.price) : "N/A"}</p>

      <div className="button-group">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>
    </div> 
  );
};

export default ProductCard;
