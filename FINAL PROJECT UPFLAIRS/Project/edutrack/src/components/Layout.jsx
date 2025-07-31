// src/components/Layout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div style={{ display: "flex", backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>
      {/* Sidebar */}
      <aside style={{
        width: "220px",
        background: "#1e1e1e",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>
        <h2 style={{ marginBottom: "20px" }}>EduTrack Portal </h2>

        <Link to="/dashboard" style={linkCardStyle}>DASHBOARD</Link>
        <Link to="/attendance" style={linkCardStyle}>ATTENDANCE</Link>
        <Link to="/notices" style={linkCardStyle}>NOTICES</Link>
        <Link to="/profile" style={linkCardStyle}>PROFILES</Link>
        <Link to="/fee" style={linkCardStyle}>FEE</Link>
        <button
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  }}
  style={{
    marginTop: "20px",
    padding: "10px 15px",
    borderRadius: "8px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    transition: "0.2s ease",
  }}
>
  Logout
</button>

      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "30px", backgroundColor: "#181818" }}>
        <Outlet />
      </main>
    </div>
  );
}

const linkCardStyle = {
  textDecoration: "none",
  backgroundColor: "#2a2a2a",
  padding: "10px 15px",
  borderRadius: "8px",
  color: "#fff",
  fontWeight: "bold",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  transition: "0.2s ease",
};
