import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/productcard.jsx";
import { products } from "../data/products.js";

import "../Style/Products.css";

function Products() {
  const [query, setQuery] = useState("");
  const [custom, setCustom] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("paradise_custom_products");
    setCustom(raw ? JSON.parse(raw) : []);
  }, []);

  const combined = useMemo(() => [...custom, ...products], [custom]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return combined;
    return combined.filter(p => p.name.toLowerCase().includes(q));
  }, [query, combined]);
  return (
    <div className="products-page">
      <h1>All Products</h1>
      <input
        type="text"
        placeholder="Search plants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 10, borderRadius: 6, border: '1px solid #cce3cc', maxWidth: 320, width: '100%', margin: '0 auto 16px' }}
      />
      <div className="products-grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
