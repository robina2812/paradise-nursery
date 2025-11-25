import React from "react";
import { Link } from "react-router-dom";
import "../Style/Footer.css";
import logo from "../image/Your paragraph text.png"; // adjust path if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section - Logo / Name */}
        <div className="footer-left">
          <img src={logo} alt="Paradise Nursery Logo" />
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/add-product">Add Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: info@paradisenursery.com</p>
          <p>Phone: +92-303-9543543</p>
          <p>Location: Islamabad, Pakistan</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h3>Subscribe</h3>
          <form onSubmit={(e) => { e.preventDefault(); const v = e.currentTarget.elements.email.value; if(v){ localStorage.setItem('paradise_newsletter', v); e.currentTarget.reset(); alert('Thanks for subscribing!'); } }}>
            <input type="email" name="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="hours">
            <p><strong>Hours:</strong> Mon-Sat 9am–7pm</p>
          </div>
          <div className="payments">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Cash on Delivery</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Paradise Nursery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
