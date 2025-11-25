import React from "react";

function NotFound() {
  return (
    <div style={{ padding: 24, marginTop: 80 }}>
      <h1>Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <a href="/" style={{ color: '#2e8b57' }}>Go back home</a>
    </div>
  );
}

export default NotFound;

