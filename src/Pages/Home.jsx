import React from "react";
import Hero from "../components/Hero.jsx";
import ProductCard from "../components/productcard.jsx";
import { products, featuredProductIds } from "../data/products.js";
import "../Style/Home.css";

function Home() {
  const featured = products.filter((p) => featuredProductIds.includes(p.id));
  return (
    <div>
      <Hero />
      {/* Benefits */}
      <section className="benefits">
        <div className="benefit"><span>🌿</span><p>Healthy, pest-free plants</p></div>
        <div className="benefit"><span>🚚</span><p>Fast local delivery</p></div>
        <div className="benefit"><span>💧</span><p>Easy-care selections</p></div>
        <div className="benefit"><span>🔁</span><p>7-day replacement</p></div>
      </section>
      <section className="product-section">
        <h2>Featured Plants</h2>
        <div className="products-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <a className="category-card" href="/products">Low Light</a>
          <a className="category-card" href="/products">Air Purifying</a>
          <a className="category-card" href="/products">Pet Friendly</a>
          <a className="category-card" href="/products">Easy Care</a>
        </div>
      </section>
      {/* Promo Banner */}
      <section className="promo">
        <div className="promo-inner">
          <h3>Summer Green Sale</h3>
          <p>Save 15% on select indoor plants this week only.</p>
          <a className="cta" href="/products">Shop Deals</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
