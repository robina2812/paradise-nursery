import React, { useState } from "react";
import "../Style/Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real signup call
    alert(`Account created for ${name}`);
  };

  return (
    <div className="auth-page">
      <h1>Sign Up</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Create Account</button>
      </form>
      <p className="auth-switch">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;

