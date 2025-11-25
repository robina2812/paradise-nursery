import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Auth.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // no-op; could prefill here
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const newItem = { id, name, price: Number(price), image };
    const raw = localStorage.getItem("paradise_custom_products");
    const arr = raw ? JSON.parse(raw) : [];
    arr.push(newItem);
    localStorage.setItem("paradise_custom_products", JSON.stringify(arr));
    navigate("/products");
  };

  return (
    <div className="auth-page">
      <h1>Add Product</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Price (USD)</label>
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <label>Image URL</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />

        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

