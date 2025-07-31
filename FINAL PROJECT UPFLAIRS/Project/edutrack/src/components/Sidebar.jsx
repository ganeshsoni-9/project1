// src/components/Sidebar.jsx
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.info("You have been logged out.");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#111", height: "100vh", color: "#fff" }}>
      <h2 style={{ marginBottom: "20px" }}>EduTrack</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link></li>
        <li><Link to="/attendance" style={{ color: "#fff" }}>Attendance</Link></li>
        <li><Link to="/notices" style={{ color: "#fff" }}>Notices</Link></li>
        <li><Link to="/profile" style={{ color: "#fff" }}>Profile</Link></li>
        <li style={{ marginTop: "20px" }}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
