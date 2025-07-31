// src/pages/Notices.jsx
import React, { useState, useEffect } from "react";

export default function Notices() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const savedNotices = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(savedNotices);
  }, []);

  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);

  const handleAddNotice = () => {
    if (!title.trim()) return;

    const newNotice = {
      id: Date.now(),
      title,
      date,
    };

    const updatedNotices = [newNotice, ...notices];
    setNotices(updatedNotices);
    setTitle("");
  };

  const handleDelete = (id) => {
    const updated = notices.filter((n) => n.id !== id);
    setNotices(updated);
  };

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      <h2>Notices</h2>

      <div style={{ marginTop: "20px" }}>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type your notice here..."
          rows={4}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#1f1f1f",
            color: "#fff",
            marginBottom: "10px",
          }}
        ></textarea>

        <button
          onClick={handleAddNotice}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add Notice
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        {notices.length === 0 ? (
          <p style={{ color: "#ccc" }}>No notices available.</p>
        ) : (
          notices.map((notice) => (
            <div
              key={notice.id}
              style={{
                backgroundColor: "#2a2a2a",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            >
              <h4 style={{ marginBottom: "5px" }}>{notice.title}</h4>
              <p style={{ fontSize: "14px", color: "#aaa" }}>
                Date: {notice.date}
              </p>
              <button
                onClick={() => handleDelete(notice.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
