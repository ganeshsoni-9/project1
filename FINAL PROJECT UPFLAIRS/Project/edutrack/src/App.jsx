import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Fee from "./pages/Fee"; // 👈 Import Fee page

export default function App() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(saved);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* All protected pages inside layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard notices={notices} />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route
          path="/notices"
          element={<Notices notices={notices} setNotices={setNotices} isAdmin={true} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/fee" element={<Fee />} /> {/* 👈 ADD THIS LINE */}
      </Route>
    </Routes>
  );
}
