import React, { useEffect, useState } from "react";
import "../Style/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("paradise_remember_email");
    if (saved) {
      setEmail(saved);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real auth call
    alert(`Logged in as ${email}`);
    if (remember) {
      localStorage.setItem("paradise_remember_email", email);
    } else {
      localStorage.removeItem("paradise_remember_email");
    }
  };

  const handleGoogle = () => {
    // Placeholder for Google OAuth; wire to provider SDK later
    alert("Google sign-in clicked");
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
          Remember me
        </label>

        <button type="submit">Login</button>
      </form>
      <button className="google-btn" onClick={handleGoogle}>Continue with Google</button>
      <p className="auth-switch">Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default Login;

