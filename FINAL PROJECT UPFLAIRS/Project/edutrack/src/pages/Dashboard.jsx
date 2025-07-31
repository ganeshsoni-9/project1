import { useEffect, useState } from "react";

export default function Dashboard({ notices = [] }) {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);
  const [total, setTotal] = useState(0);
  const [feePaidCount, setFeePaidCount] = useState(0); // ✅ NEW

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("attendance")) || {};
    const dayData = allData[date] || {};

    const allStudents = [
      "Hemesh Mishra",
      "Ganesh Soni",
      "Chandraprakash",
      "Kuldeep Sunda",
      "Mohit Saini",
      ...Array.from({ length: 115 }, (_, i) => `Student ${i + 6}`),
    ];

    const presentCount = allStudents.filter((name) => dayData[name]).length;
    const totalCount = allStudents.length;

    setPresent(presentCount);
    setAbsent(totalCount - presentCount);
    setTotal(totalCount);

    // ✅ Fee Paid Count
    const feeData = JSON.parse(localStorage.getItem("feeData")) || [];
    const paidStudents = new Set(feeData.map((entry) => entry.name));
    setFeePaidCount(paidStudents.size);
  }, [date]);

  return (
    <div style={{ padding: "30px", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Dashboard</h2>

      {/* Small Calendar (Date Picker) */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #444",
          backgroundColor: "#222",
          color: "#fff",
        }}
      />

      {/* Summary Boxes */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "30px" }}>
        <div style={boxStyle("#28a745")}>
          <p style={labelStyle}>Present</p>
          <h3 style={countStyle}>{present}</h3>
        </div>
        <div style={boxStyle("#dc3545")}>
          <p style={labelStyle}>Absent</p>
          <h3 style={countStyle}>{absent}</h3>
        </div>
        <div style={boxStyle("#17a2b8")}>
          <p style={labelStyle}>Date</p>
          <h3 style={countStyle}>{date}</h3>
        </div>
        <div style={boxStyle("#ffc107")}>
          <p style={labelStyle}>Fee Paid</p>
          <h3 style={countStyle}>{feePaidCount}</h3>
        </div>
      </div>

      {/* Notices Section */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ color: "#fff", marginBottom: "10px" }}>Recent Notices</h3>
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
                color: "#fff",
              }}
            >
              <h4 style={{ marginBottom: "5px" }}>{notice.title}</h4>
              <p style={{ fontSize: "14px", color: "#aaa" }}>
                Date: {notice.date}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer Signature */}
      <div style={{ textAlign: "right", fontSize: "12px", marginTop: "100px", color: "#aaa" }}>
        ~DESIGNED BY HEMESH MISHRA~
      </div>
    </div>
  );
}

// Styles
const boxStyle = (bgColor) => ({
  backgroundColor: bgColor,
  padding: "20px",
  borderRadius: "10px",
  flex: 1,
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
});

const labelStyle = {
  margin: 0,
  fontSize: "16px",
};

const countStyle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "bold",
};
