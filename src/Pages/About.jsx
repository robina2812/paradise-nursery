import React, { useState } from "react";
import "../Style/About.css";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, message, at: new Date().toISOString() };
    const raw = localStorage.getItem("paradise_contact_messages");
    const arr = raw ? JSON.parse(raw) : [];
    arr.push(payload);
    localStorage.setItem("paradise_contact_messages", JSON.stringify(arr));
    setName("");
    setEmail("");
    setMessage("");
    alert("Thanks! We received your message and will get back soon.");
  };

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p>
          We offer a wide variety of healthy houseplants, delivered fast with
          care instructions and support.
        </p>
      </div>

      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Bring greenery and happiness to every space with easy-care plants and
          friendly guidance.
        </p>
      </div>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Message</label>
          <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required />

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default About;
