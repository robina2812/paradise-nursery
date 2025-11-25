import React from "react";
// import { Link } from "react-router-dom";

import logo from "../image/Your paragraph text.png"; // adjust path to your logo
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../Store/CartSlice.jsx";
import "../Style/Header.css";
 

function Header() {
  const cartCount = useSelector(selectCartCount);
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Paradise Nursery Logo" className="logo-img" />
        </Link>
      </div>

      {/* Center: Navigation */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart{cartCount > 0 ? ` (${cartCount})` : ""}</Link>
      </nav>

      {/* Right: Auth button */}
      <div className="login-section">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </header>
  );
}

export default Header;
