// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username.toLowerCase() === "hemesh" && password === "hemesh") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center", background: "#111", height: "100vh", color: "#fff" }}>
      <h2>Login to EduTrack</h2>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #333",
            background: "#222",
            color: "#fff",
            width: "250px"
          }}
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #333",
            background: "#222",
            color: "#fff",
            width: "250px"
          }}
        /><br />

        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "15px" }}>{error}</p>
        )}
      </div>
    </div>
  );
}
